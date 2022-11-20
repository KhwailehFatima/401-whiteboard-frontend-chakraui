import axios from "axios";
import React from "react";
import Form from "react-bootstrap/Form";
import { actionType } from "../config/constant";
import {
  Button,
  FormControl,
  FormLabel,
  useToast,
  VStack,
  Textarea,
} from "@chakra-ui/react";

function AddCommentForm(props) {

  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userID = actionType.user.userId;
    const newComment = {
      comment: e.target.comment.value,
    };
    await axios
      .post(
        `${process.env.REACT_APP_HEROKU_URI}/comment/${props.postID}/${userID}`,
        newComment
      )
      .then(() => {
        props.getAllPosts();
        e.target.comment.value = "";
        toast({
          title: 'Comment is added',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (

    <Form onSubmit={handleSubmit}>

      <VStack pb="2em"
        backgroundColor={'yellow.300'}
      >
        <FormControl borderColor="green.500" isRequired>
          <FormLabel requiredIndicator >Write Comment Here</FormLabel>
          <Textarea rows={3} placeholder="Enter Comment" name="comment" />
        </FormControl>

        <Button colorScheme="green" type="submit" alignSelf="stretch">
          Add Comment
        </Button>

      </VStack>
    </Form>
  );
}

export default AddCommentForm;