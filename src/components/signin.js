import React from "react";
import Form from "react-bootstrap/Form";

import { useAuth } from "../Context/authContext";
import {
  VStack,
  Text,
  Heading,
  Alert,
  AlertIcon,
  Link,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";

export default function Signin() {
  const { userData, handleSignin } = useAuth();

  return (
     <Flex
      direction={{ base: "column", md: "row" }}
      justify="center"
      align="center"
      w="100%"
      h="67vh"
      >

    <VStack 
    borderColor="blue.500"
    borderRadius="lg"
    borderWidth="2px"
    textAlign="center"
    p="5em"
    m="2em"
    w={{base: '90vw', sm:'80vw', lg:'50vw', xl:'40vw'}}
    alignItems='stretch'
    spacing={100}
    mb="5em"
    backgroundColor={'yellow.300'}  
    backdropBrightness='500'

    >
      <Heading>Sign In</Heading>

      <Form onSubmit={handleSignin} >
        <FormControl pb="3em" borderColor="green.500" isRequired>
          <FormLabel requiredIndicator>Username</FormLabel>
          <Input type="text" placeholder="username" id="userName" autoComplete="userName" />
          </FormControl>

          <FormControl pb="3em" borderColor="green.500" isRequired>
          <FormLabel requiredIndicator>Password</FormLabel>
          <Input type="password" placeholder="password" id="password" autoComplete="current-password" />
        </FormControl>

        {userData.isNotLogged && (
          <Alert status='error' variant='left-accent' mb="1em">
            <AlertIcon />
            You Are Not Authorized
          </Alert>  
        )}

        <Button colorScheme="green" type="submit" mb="1rem">
          Sign In
        </Button>
        <Text >
         You don't have an account? <Link color='green.500' href="/signup">Sign up now</Link>
        </Text>
      </Form>
    </VStack>
    </Flex>
  );
}