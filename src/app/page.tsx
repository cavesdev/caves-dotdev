'use client';

import React, { useEffect, useState } from 'react';
import { Badge, Box, Button, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { ColorModeButton } from '@/components/ui/color-mode';
import { SkillBadge } from '@/components/home/skill-badge';
import { ProjectShowcase } from '@/components/home/project-showcase';
import { BlogPreview } from '@/components/home/blog-preview';
import { Footer } from '@/components/layouts/footer';

const TypingText = ({ text }: { text: string }) => {
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
        fontSize={{ base: 'xl', md: '2xl' }}
        fontFamily="'JetBrains Mono', monospace"
      >
        {displayText}
        <Box as="span" ml="1px" animation="blink 1s step-end infinite">|</Box>
      </Text>
    </Box>
  );
};

const NavBar = () => (
  <HStack
    p={4}
    justify="space-between"
    borderBottomWidth="1px"
    borderColor="borderColor"
  >
    <Text
      fontWeight="bold"
      fontSize="xl"
      color="electricBlue"
    >
      caves.dev
    </Text>
    <ColorModeButton />
  </HStack>
);

const ProfileSection = () => (
  <Stack
    px={{ base: "6", md: "16" }}
    py="20"
    fontFamily='mono'
    alignItems="flex-start"
  >
      <Badge
        py="1"
        bg="midnightBlue"
        borderRadius="md"
        fontSize="sm"
        color="electricBlue"
      >
        Hello, my name is
      </Badge>
      <Heading
        fontSize={{ base: "4xl", md: "5xl" }}
        fontWeight="bold"
        my="4"
      >
        Carlos Cuevas
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
          borderRadius="md"
          _hover={{ bg: "rgba(45, 125, 255, 0.1)" }}
          transition="colors 0.3s"
        >
          Get In Touch
        </Button>
      </Stack>
    <SkillBadge text={"Security-first approach"}/>
  </Stack>
);

const Homepage = () => {
  return (
      <Box>
        <NavBar />
        <ProfileSection />
        <ProjectShowcase />
        <BlogPreview />
        <Footer />
      </Box>
  );
};

export default Homepage;