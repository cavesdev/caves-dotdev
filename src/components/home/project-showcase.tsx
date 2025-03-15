import { Box, Button, Container, Flex, Grid, Heading, HStack, Link, Tag, Text } from '@chakra-ui/react';

interface Project {
  title: string;
  description: string;
  tags: string[];
}

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

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <Box
    bg="midnightBlue"
    borderRadius="md"
    overflow="hidden"
    transition="all 0.3s"
    _hover={{ boxShadow: "lg" }}
  >
    <Box h="48" bg="rgba(45, 125, 255, 0.1)" display="flex" alignItems="center" justifyContent="center">
      <Text fontFamily="mono" color="electricBlue">[Project Screenshot]</Text>
    </Box>
    <Box p="6">
      <Heading
        size="md"
        mb="2"
        fontFamily="mono"
      >
        {project.title}
      </Heading>
      <Text color="coolGray" mb="4">
        {project.description}
      </Text>
      <Flex wrap="wrap" gap="2" mb="4">
        {project.tags.map((tag, index) => (
          <Tag.Root key={index} py={1} px={2} size="sm" bg="deepCharcoal" color="coolGray">
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

export const ProjectShowcase = () => (
  <Box
    px={{ base: '6', md: '16' }}
    py="20"
    bg="midnightBlue"
    borderTopWidth="1px"
    borderColor="borderColor"
  >
    <Container maxW="6xl">
      <Heading
        fontSize={{ base: '2xl', md: '3xl' }}
        fontWeight="bold"
        mb="12"
        fontFamily='mono'
      >
        Project Showcase
      </Heading>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap="8"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project}/>
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
          _hover={{ bg: 'rgba(45, 125, 255, 0.1)' }}
          transition="colors 0.3s"
        >
          View All Projects
        </Button>
      </Box>
    </Container>
  </Box>
);