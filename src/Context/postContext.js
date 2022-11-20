import { createContext, useContext, useState } from "react";
import axios from "axios";
import { ControlBox, useToast } from "@chakra-ui/react";

import { useAuth } from '../Context/authContext';

export const PostContext = createContext();

export const usePost = () => useContext(PostContext);

const PostContextProvider = (props) => {
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [posts, setPosts] = useState([]);
  const [addAlert, setAddAlert] = useState(false);

  const { userData } = useAuth();

  const toast = useToast();
  const token = localStorage.getItem('token');
  // console.log({token})

  const getAllPosts = async () => {
    const allPosts = await axios.get(
      `${process.env.REACT_APP_HEROKU_URI}/post`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log({allPosts})
    setPosts(allPosts.data.post);
  };
  

  const handlePostDelete = async (id) => {
    const userID = userData.user.userId;
    await axios.delete(`${process.env.REACT_APP_HEROKU_URI}/post/${id}/${userID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    getAllPosts();
    setDeleteAlert(true);
    toast({
      title: 'Post has been deleted successfully!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleCommentDelete = async (id) => {
    await axios.delete(`${process.env.REACT_APP_HEROKU_URI}/comment/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    getAllPosts();
    toast({
      title: 'Comment is deleted successfully!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
        postTitle: e.target.title.value,
        postContent: e.target.content.value,
        userID:JSON.parse(localStorage.getItem('currentUser')).id,
        creator:JSON.parse(localStorage.getItem('currentUser')).username
    };
    // console.log({newPost})
    try {
      
      await axios.post(`${process.env.REACT_APP_HEROKU_URI}/post`, newPost, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
      }).then( () => {
        // console.log('you added a post')
          getAllPosts();
           toast({
            title: 'Post has been added successfully!',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
      });
    } catch (error) {
      console.log(error)
    }
}

  const value = {posts, addAlert, setAddAlert, deleteAlert, setDeleteAlert, getAllPosts, handlePostDelete, handleCommentDelete, handleSubmit};

  return (
    <PostContext.Provider value={value}>
        {props.children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;