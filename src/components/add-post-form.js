import React from "react";
import Form from "react-bootstrap/Form";

import { usePost } from "../Context/postContext";

import {
  Input,
  Button,
  VStack,
  Textarea,
  Heading,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
 
function AddPostForm() {
  const { handleSubmit } = usePost();

  return (
    <VStack
      borderColor="green.500"
      backgroundColor={'yellow.300'}
      borderRadius="lg"
      borderWidth="5px"
      textAlign="center"
      p="5em"
      m="2em"
      w={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
      spacing={30}
      boxShadow="lg"
    >
      <Heading size="3xl" noOfLines={1}>
      Add your post!
      </Heading>

      <Form onSubmit={handleSubmit} >
        <FormControl pb="2em" borderColor="green.500" isRequired>
          <FormLabel fontSize={'20'} textAlign='center' requiredIndicator>Post Title</FormLabel>
          <Input type="text" borderWidth={2} placeholder="Enter the title" id="title" />
        </FormControl>

        <FormControl pb="2em"   borderColor="green.500" isRequired>
          <FormLabel fontSize={'20'} textAlign='center' requiredIndicator>Post Content</FormLabel>
          <Textarea rows={5} borderWidth={2} placeholder="Enter Post Contents" id="content" />
        </FormControl>

        <Button colorScheme="green"   type="submit">Submit</Button>
      </Form>
    </VStack>
  );
}

export default AddPostForm;