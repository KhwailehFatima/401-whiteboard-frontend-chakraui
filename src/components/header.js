import React from "react";
import { useColorMode, IconButton, VStack, HStack, Heading, Button, Spacer, Flex } from "@chakra-ui/react";
import { BsSunset, BsSunrise } from "react-icons/bs";
import { actionType } from "../config/constant";
import { useAuth } from "../Context/authContext";

export default function Header() {
  const { handleLogout } = useAuth();

  const { toggleColorMode, colorMode  } = useColorMode();

  const userInfo = localStorage.getItem('currentUser')
  return (
    <Flex p="2.5em" mb="5em" h="15em" bgGradient="linear(to-r, yellow.500, green.300, yellow.200)">

      <HStack w="100%" h="100%" alignItems='right' >
        <Heading
          as="h1"
          size="3xl"
          noOfLines={2}
        >
        </Heading>

        <Spacer />
        {userInfo ? (
          <VStack alignItems="left" alignSelf="flex-end"
         textAlign={'center'}
          >

            <Heading
              as="h2"
              size="2xl"
              noOfLines={2}
              >
                

              Welcome, {actionType.user.username}
            </Heading>

            <Button boxShadow="md"
              colorScheme={"green"}
              onClick={handleLogout}>Logout</Button>
          </VStack>
        ) : null}

        <IconButton
          variant="outline"
          colorScheme="white"
          aria-label="color theme"
          icon={colorMode === "light" ? <BsSunrise /> : <BsSunset />}
          onClick={toggleColorMode}
          alignSelf="flex-end"
        />
      </HStack>

    </Flex>
  );
}