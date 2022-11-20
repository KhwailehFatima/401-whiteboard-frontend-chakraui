import React, { useEffect } from "react";
import AddPostForm from "./add-post-form";
import AddCommentForm from "./add-comment-form";
import EditModal from "./Modal";
 import { usePost } from "../Context/postContext";
 import { actionType } from "../config/constant";
import { FaTrash } from 'react-icons/fa';

import {
  Flex,
  VStack,
  StackDivider,
  HStack,
  Button,
  Heading,
  Text,
  Wrap,
  Box,
  IconButton,
  Badge,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";

function Post() {
  const { posts, getAllPosts, handlePostDelete, handleCommentDelete } = usePost();
 
   const userName = actionType.user.username ;
   useEffect(() => {
    // getAllPosts();
  });

  return (
    <Flex direction="column" justify="center" alignItems="center">

      <Heading mb="1em" textStyle='h1' >Chat with us! {userName}</Heading>
 

      <AddPostForm />

      <Wrap spacing={12} justify="center"
      backgroundColor={'yellow.300'}
      >
{/* {console.log({posts})} */}
        {posts &&
          posts.map((value, idx) => {
            return (
              <SimpleGrid key={idx} minChildWidth='600px'>
                <Box borderWidth="1px" borderRadius="lg" overflow="hidden"  boxShadow="md">
                  <Box p="4">
                    <Box display="flex" alignItems="baseline">
                      <Badge borderRadius="full" px="1" colorScheme="teal">Lough!</Badge>
                      <Box
                        fontWeight="bold"
                        color="gray.500"
                        letterSpacing="wide"
                        fontSize="lg"
                         ml="2"
                        >
                        {value.creator.charAt(0).toUpperCase() + value.creator.slice(1)}
                      </Box>
                    </Box>

                    <Box mt="1" fontWeight="bold" as="h4" lineHeight="tight" noOfLines={2}>
                      {value.postTitle}
                    </Box>

                    <Box display="flex" mt="2" alignItems="center">
                        {value.postContent}
                    </Box>
  
                    <Box m="5">
                       {actionType.user.role === "admin" || actionType.user.userId === value.userID ? (
                        <HStack justify="center" divider={<StackDivider borderColor="gray.200" />}>
                          <EditModal post={value} getAllPosts={getAllPosts} />
                          <Button leftIcon={<FaTrash />} colorScheme="red" type="submit" variant='primary' onClick={() => handlePostDelete(value.id)}>Delete Post</Button>
                        </HStack>
                      ) : null}
                    </Box>

                    <AddCommentForm postID={value.id} getAllPosts={getAllPosts} />

                    <Box key={idx} 
                    p="2" 
                    m="2" 
                    borderWidth="1px" 
                    borderRadius="lg" 
                    overflow="hidden" 
                    w="100%" 
                    boxShadow="md">
                    
                        {value.Comments.length > 0 ? (
                          <VStack 
                          divider={<StackDivider borderColor="gray.200" />} 
                          alignItems='stretch'
                          backgroundColor='yellow.300'
                          >
                        {value.Comments && value.Comments.map((item, idx) => {
                          return (
                              <HStack spacing={4} key={idx}>
                                <Text fontWeight="semibold" >
                                  {item.creator.charAt(0).toUpperCase() + item.creator.slice(1)}
                                  </Text>
                                <Text>{item.comment}</Text>
                                <Spacer/>
                                {actionType.user.role === "admin" || actionType.user.userId === item.userID ? (
                                  <IconButton 
                                  icon={<FaTrash />}
                                  isRound='true'
                                  onClick={() => handleCommentDelete(item.id)}
                                  boxShadow="md"
                                    />
                                    ) : null}
                              </HStack>
                            );
                          })}
                          </VStack>) : <Text>Add comment ...</Text>}
                        </Box>
                  </Box>
                </Box>
              </SimpleGrid>
          );
        })}
      </Wrap>
    </Flex>
  );
}

export default Post;
 