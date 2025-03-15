'use client';

import React, {useEffect, useState} from 'react';
import {
  Badge,
  Box,
  Button,
  Circle,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  IconButton,
  Link,
  Stack,
  Tag,
  Text,
  VStack
} from '@chakra-ui/react';
import {FaChevronRight} from "react-icons/fa";

// Define type for our custom colors
interface CustomColors {
  deepCharcoal: string;
  midnightBlue: string;
  electricBlue: string;
  coolGray: string;
  snowWhite: string;
  tealGreen: string;
  emberOrange: string;
  deepPurple: string;
  borderColor: string;
}

// Custom theme colors to match our design system
const colors: CustomColors = {
  deepCharcoal: "#121212",
  midnightBlue: "#0F1E33",
  electricBlue: "#2D7DFF",
  coolGray: "#AEAEAE",
  snowWhite: "#F8F8F8",
  tealGreen: "#09C184",
  emberOrange: "#FF5722",
  deepPurple: "#6E44FF",
  borderColor: "#222222"
};

// Define interface for project data
interface Project {
  title: string;
  description: string;
  tags: string[];
}

// Define interface for blog post data
interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
}

// Sample project data
const projects: Project[] = [
  {
    title: "Secure Authentication API",
    description: "A robust authentication system with JWT, refresh tokens, and role-based access control.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "E-commerce Dashboard",
    description: "Admin dashboard for product management with real-time analytics and inventory tracking.",
    tags: ["React", "Redux", "Chart.js"],
  }
];

// Sample blog data
const blogPosts: BlogPost[] = [
  {
    title: "Securing Your Web Applications",
    description: "An exploration of modern security practices for web applications, with practical examples and implementation guides.",
    date: "May 12, 2025",
    readTime: "6 min read"
  },
  {
    title: "Building Scalable APIs with Node.js",
    description: "Learn how to design and implement APIs that can handle millions of requests while maintaining security.",
    date: "April 28, 2025",
    readTime: "8 min read"
  }
];

// Props interface for TypingText component
interface TypingTextProps {
  text: string;
}

// Custom text typing animation component
const TypingText: React.FC<TypingTextProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState<string>('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
      <Box h="10" display="flex" alignItems="center">
        <Text
            color="electricBlue"
            fontSize={{ base: "xl", md: "2xl" }}
            fontFamily="'JetBrains Mono', monospace"
        >
          {displayText}
          <Box as="span" ml="1px" animation="blink 1s step-end infinite">|</Box>
        </Text>
      </Box>
  );
};

// Props interface for ProjectCard component
interface ProjectCardProps {
  project: Project;
}

// Custom project card component
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
    <Box
        bg="midnightBlue"
        borderRadius="md"
        overflow="hidden"
        transition="all 0.3s"
        _hover={{ boxShadow: "lg" }}
    >
      <Box h="48" bg="rgba(45, 125, 255, 0.1)" display="flex" alignItems="center" justifyContent="center">
        <Text fontFamily="'JetBrains Mono', monospace" color="electricBlue">[Project Screenshot]</Text>
      </Box>
      <Box p="6">
        <Heading
            as="h3"
            size="md"
            mb="2"
            fontFamily="'JetBrains Mono', monospace"
        >
          {project.title}
        </Heading>
        <Text color="coolGray" mb="4">
          {project.description}
        </Text>
        <Flex wrap="wrap" gap="2" mb="4">
          {project.tags.map((tag, index) => (
              <Tag.Root key={index} size="sm" bg="deepCharcoal" color="coolGray">
                <Tag.Label>{tag}</Tag.Label>
              </Tag.Root>
          ))}
        </Flex>
        <HStack gap="4">
          <Link color="electricBlue" _hover={{ textDecoration: "underline" }}>
            View Project
          </Link>
          <Link color="electricBlue" _hover={{ textDecoration: "underline" }}>
            Source Code
          </Link>
        </HStack>
      </Box>
    </Box>
);

// Props interface for BlogPostPreview component
interface BlogPostPreviewProps {
  post: BlogPost;
}

// Custom blog post preview component
const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({ post }) => (
    <Flex flexDir={{ base: "column", md: "row" }} gap="6" pb="8" borderBottom="1px" borderColor="borderColor">
      <Box width={{ base: "full", md: "1/3" }}>
        <Text color="coolGray" mb="2" fontSize="sm" fontFamily="'JetBrains Mono', monospace">
          {post.date}
        </Text>
        <HStack color="coolGray" mb="2" fontSize="sm">
          <Box as="svg" h="4" w="4" fill="none">
            <path
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
          </Box>
          <Text>{post.readTime}</Text>
        </HStack>
      </Box>
      <Box width={{ base: "full", md: "2/3" }}>
        <Heading
            as="h3"
            size="md"
            mb="2"
            fontFamily="'JetBrains Mono', monospace"
        >
          {post.title}
        </Heading>
        <Text color="coolGray" mb="4">
          {post.description}
        </Text>
        <Link color="electricBlue" _hover={{ textDecoration: "underline" }} display="flex" alignItems="center">
          Read Article
          <FaChevronRight />
        </Link>
      </Box>
    </Flex>
);

// Main Homepage component
const Homepage: React.FC = () => {
  return (
      <Box
          bg="deepCharcoal"
          color="snowWhite"
          minH="100vh"
          // sx={{
          //   '--colors-deepCharcoal': colors.deepCharcoal,
          //   '--colors-midnightBlue': colors.midnightBlue,
          //   '--colors-electricBlue': colors.electricBlue,
          //   '--colors-coolGray': colors.coolGray,
          //   '--colors-snowWhite': colors.snowWhite,
          //   '--colors-tealGreen': colors.tealGreen,
          //   '--colors-emberOrange': colors.emberOrange,
          //   '--colors-deepPurple': colors.deepPurple,
          //   '--colors-borderColor': colors.borderColor,
          // }}
          fontFamily="'Inter', sans-serif"
      >
        {/* Navigation */}
        <Flex
            as="nav"
            px="6"
            py="6"
            justify="space-between"
            align="center"
            borderBottom="1px"
            borderColor="borderColor"
            maxW="6xl"
            mx="auto"
            width="full"
        >
          <Text
              fontFamily="'JetBrains Mono', monospace"
              fontWeight="bold"
              fontSize="xl"
              color="electricBlue"
          >
            YourName
          </Text>
          <HStack gap="8" display={{ base: "none", md: "flex" }}>
            <Link _hover={{ color: "electricBlue" }} transition="colors 0.3s">
              About
            </Link>
            <Link _hover={{ color: "electricBlue" }} transition="colors 0.3s">
              Projects
            </Link>
            <Link _hover={{ color: "electricBlue" }} transition="colors 0.3s">
              Blog
            </Link>
            <Link _hover={{ color: "electricBlue" }} transition="colors 0.3s">
              Contact
            </Link>
          </HStack>
          <Box display={{ base: "block", md: "none" }}>
            <IconButton
                aria-label="Open menu"
            >
              <Flex direction="column" justify="center" align="center">
                <Box w="6" h="0.5px" bg="snowWhite" mb="1.5px" />
                <Box w="6" h="0.5px" bg="snowWhite" mb="1.5px" />
                <Box w="6" h="0.5px" bg="snowWhite" />
              </Flex>
            </IconButton>
          </Box>
        </Flex>

        {/* Hero Section */}
        <Flex
            as="section"
            direction="column"
            justify="center"
            px={{ base: "6", md: "16" }}
            py="20"
            maxW="6xl"
            mx="auto"
            width="full"
            flexGrow="1"
        >
          <Box mb="8">
            <Badge
                px="3"
                py="1"
                bg="midnightBlue"
                borderRadius="md"
                fontSize="sm"
                mb="4"
                color="electricBlue"
                fontFamily="'JetBrains Mono', monospace"
            >
              Hello, my name is
            </Badge>
            <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "5xl" }}
                fontWeight="bold"
                mb="4"
                fontFamily="'JetBrains Mono', monospace"
            >
              YourName
            </Heading>
            <TypingText text="Full stack engineer. Security specialist. Problem solver." />
            <Text color="coolGray" maxW="xl" mb="8">
              I build secure, scalable web applications and solve complex problems.
              With expertise in both frontend and backend technologies, I create
              solutions that are not only functional but also secure by design.
            </Text>
            <Stack
                direction={{ base: "column", sm: "row" }}
                gap="4"
            >
              <Button
                  bg="electricBlue"
                  color="snowWhite"
                  px="6"
                  py="3"
                  borderRadius="md"
                  _hover={{ bg: "#1D6DFF" }}
                  transition="colors 0.3s"
              >
                View My Work
              </Button>
              <Button
                  variant="outline"
                  borderColor="electricBlue"
                  color="electricBlue"
                  px="6"
                  py="3"
                  borderRadius="md"
                  _hover={{ bg: "rgba(45, 125, 255, 0.1)" }}
                  transition="colors 0.3s"
              >
                Get In Touch
              </Button>
            </Stack>
          </Box>

          {/* Security Badge */}
          <HStack
              gap="2"
              px="4"
              py="2"
              bg="midnightBlue"
              borderRadius="md"
              alignSelf="flex-start"
          >
            <Circle size="3" bg="tealGreen" animation="pulse 2s infinite" />
            <Text fontSize="sm" fontFamily="'JetBrains Mono', monospace">
              Security-first approach
            </Text>
          </HStack>
        </Flex>

        {/* Projects Preview */}
        <Box
            as="section"
            px={{ base: "6", md: "16" }}
            py="20"
            bg="midnightBlue"
            borderTop="1px"
            borderColor="borderColor"
        >
          <Container maxW="6xl">
            <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="bold"
                mb="12"
                fontFamily="'JetBrains Mono', monospace"
            >
              Selected Projects
            </Heading>
            <Grid
                templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
                gap="8"
            >
              {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
              ))}
            </Grid>
            <Box textAlign="center" mt="12">
              <Button
                  variant="outline"
                  borderColor="electricBlue"
                  color="electricBlue"
                  px="6"
                  py="3"
                  borderRadius="md"
                  _hover={{ bg: "rgba(45, 125, 255, 0.1)" }}
                  transition="colors 0.3s"
              >
                View All Projects
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Blog Preview */}
        <Box
            as="section"
            px={{ base: "6", md: "16" }}
            py="20"
            borderTop="1px"
            borderColor="borderColor"
        >
          <Container maxW="6xl">
            <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="bold"
                mb="12"
                fontFamily="'JetBrains Mono', monospace"
            >
              Latest Articles
            </Heading>
            <VStack gap="8" align="stretch">
              {blogPosts.map((post, index) => (
                  <BlogPostPreview key={index} post={post} />
              ))}
            </VStack>
            <Box textAlign="center" mt="12">
              <Button
                  variant="outline"
                  borderColor="electricBlue"
                  color="electricBlue"
                  px="6"
                  py="3"
                  borderRadius="md"
                  _hover={{ bg: "rgba(45, 125, 255, 0.1)" }}
                  transition="colors 0.3s"
              >
                View All Articles
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Footer */}
        <Box
            as="footer"
            px="6"
            py="12"
            bg="midnightBlue"
            borderTop="1px"
            borderColor="borderColor"
        >
          <Container maxW="6xl">
            <Flex
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                align="center"
            >
              <Text
                  fontFamily="'JetBrains Mono', monospace"
                  fontWeight="bold"
                  fontSize="xl"
                  color="electricBlue"
                  mb={{ base: "4", md: "0" }}
              >
                YourName
              </Text>
              <HStack
                  gap="6"
                  mb={{ base: "4", md: "0" }}
              >
                <Link color="coolGray" _hover={{ color: "electricBlue" }}>
                  GitHub
                </Link>
                <Link color="coolGray" _hover={{ color: "electricBlue" }}>
                  LinkedIn
                </Link>
                <Link color="coolGray" _hover={{ color: "electricBlue" }}>
                  Twitter
                </Link>
              </HStack>
              <Text color="coolGray" fontSize="sm">
                © 2025 YourName. All rights reserved.
              </Text>
            </Flex>
          </Container>
        </Box>
      </Box>
  );
};

export default Homepage;