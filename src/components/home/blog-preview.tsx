import { Box, Button, Container, Flex, Heading, HStack, Link, Text, VStack } from '@chakra-ui/react';
import { FaChevronRight, FaClock } from 'react-icons/fa';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'Securing Your Web Applications',
    description: 'An exploration of modern security practices for web applications, with practical examples and implementation guides.',
    date: 'May 12, 2025',
    readTime: '6 min read'
  },
  {
    title: 'Building Scalable APIs with Node.js',
    description: 'Learn how to design and implement APIs that can handle millions of requests while maintaining security.',
    date: 'April 28, 2025',
    readTime: '8 min read'
  }
];

interface BlogPostPreviewProps {
  post: BlogPost;
}

export const BlogPostPreview = ({ post }: BlogPostPreviewProps) => (
  <Flex flexDir={{ base: 'column', md: 'row' }} gap="6" pb="8" borderBottom="1px" borderColor="borderColor">
    <Box width={{ base: 'full', md: '1/3' }}>
      <Text color="coolGray" mb="2" fontSize="sm" fontFamily="mono">
        {post.date}
      </Text>
      <HStack color="coolGray" mb="2" fontSize="sm">
        <FaClock />
        <Text>{post.readTime}</Text>
      </HStack>
    </Box>
    <Box width={{ base: 'full', md: '2/3' }}>
      <Heading
        as="h3"
        size="md"
        mb="2"
        fontFamily="mono"
      >
        {post.title}
      </Heading>
      <Text color="coolGray" mb="4">
        {post.description}
      </Text>
      <Link color="electricBlue" _hover={{ textDecoration: 'underline' }} display="flex" alignItems="center">
        Read Article
        <FaChevronRight/>
      </Link>
    </Box>
  </Flex>
);

export const BlogPreview = () => (
  <Box
    px={{ base: '6', md: '16' }}
    py="20"
    borderTopWidth="1px"
    borderColor="borderColor"
  >
    <Container maxW="6xl">
      <Heading
        fontSize={{ base: '2xl', md: '3xl' }}
        fontWeight="bold"
        mb="12"
        fontFamily="mono"
      >
        Latest Articles
      </Heading>
      <VStack gap="8" align="stretch">
        {blogPosts.map((post, index) => (
          <BlogPostPreview key={index} post={post}/>
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
          _hover={{ bg: 'rgba(45, 125, 255, 0.1)' }}
          transition="colors 0.3s"
        >
          View All Articles
        </Button>
      </Box>
    </Container>
  </Box>
)