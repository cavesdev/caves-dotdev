import { Circle, HStack, Text } from '@chakra-ui/react';

export const SkillBadge = ({ text }: { text: string }) => (
  <HStack
    gap="2"
    px="4"
    py="2"
    bg="midnightBlue"
    borderRadius="md"
  >
    <Circle size="3" bg="tealGreen" animation="pulse 2s infinite"/>
    <Text fontSize="sm">
      {text}
    </Text>
  </HStack>
);