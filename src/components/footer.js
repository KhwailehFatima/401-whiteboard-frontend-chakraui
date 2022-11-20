
import React from "react";
import { VStack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <VStack  w="100%" h="3em" mt="10"  bgGradient="linear(to-r, yellow.500, green.300, yellow.200)" justifyContent="center">
      <Text>Created with love by Fatima Khwaileh</Text>
    </VStack>
  );
}