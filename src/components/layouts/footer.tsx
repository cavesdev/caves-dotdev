import { Box, Container, Flex, HStack, Link, Text } from '@chakra-ui/react';
import React from 'react';

export const Footer = () => (
  <Box
    px="6"
    py="12"
    bg="midnightBlue"
    borderTopWidth="1px"
    borderColor="borderColor"
  >
    <Container maxW="6xl">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
      >
        <Text
          fontFamily="mono"
          fontWeight="bold"
          fontSize="xl"
          color="electricBlue"
          mb={{ base: '4', md: '0' }}
        >
          Carlos Cuevas
        </Text>
        <HStack
          gap="6"
          mb={{ base: '4', md: '0' }}
        >
          <Link color="coolGray" _hover={{ color: 'electricBlue' }}>
            GitHub
          </Link>
          <Link color="coolGray" _hover={{ color: 'electricBlue' }}>
            LinkedIn
          </Link>
          <Link color="coolGray" _hover={{ color: 'electricBlue' }}>
            Twitter
          </Link>
        </HStack>
        <Text color="coolGray" fontSize="sm">
          © 2025 cavesdev. All rights reserved.
        </Text>
      </Flex>
    </Container>
  </Box>
);