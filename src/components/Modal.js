import React from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useAuth } from '../Context/authContext';

import { FaEdit } from "react-icons/fa";
import {
  Button,
  VStack,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from '@chakra-ui/react'


function EditModal(props) {

    const { userData } = useAuth();

    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast();

    const handleEdit = async (e, id) => {
        e.preventDefault();
        const updatedPost = {
          postTitle: e.target.editTitle.value,
          postContent: e.target.editContent.value,
          userID: userData.user.userId,
          creator: userData.user.username
        };

        await axios.put(`${process.env.REACT_APP_HEROKU_URL}/post/${id}`, updatedPost, {
            headers: {
              Authorization: `Bearer ${userData.user.token}`,
            },
          }
        );
        props.getAllPosts();
        onClose();
        toast({
          title: 'Post has been Edited successfully!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      };
    
        return (
            <VStack>
                <Button leftIcon={<FaEdit />} colorScheme="blue" onClick={onOpen}>Edit Post</Button> 

                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Edit Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <Form onSubmit={(e) => handleEdit(e, props.post.id)}>

                          <FormControl pb="2em" isRequired >
                            <FormLabel requiredIndicator >Post Title</FormLabel>
                            <Input defaultValue={props.post.postTitle} name="editTitle" />
                          </FormControl>

                          <FormControl pb="2em" isRequired>
                            <FormLabel requiredIndicator >Post Content</FormLabel>
                            <Textarea rows={5} defaultValue={props.post.postContent} name="editContent" />
                          </FormControl>

                          <ModalFooter>
                            <Button colorScheme='blue' type="submit">Save Changes</Button>
                            <Button variant='ghost' mr={3} onClick={onClose}>Close</Button>
                          </ModalFooter>

                        </Form>

                    </ModalBody>
                  </ModalContent>
                </Modal>

            </VStack>
        )

}

export default EditModal;