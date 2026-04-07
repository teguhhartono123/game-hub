import {
  Button,
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogCloseTrigger,
  DialogBackdrop,
  Text,
  Link,
  VStack,
} from "@chakra-ui/react";

const AboutModal = () => {
  return (
    <DialogRoot placement="center">
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          color="blue.400" // Better contrast for Dark Mode
          fontSize="md" // Standard readable size
          fontWeight="semibold" // Makes it look professional
          _hover={{ bg: "whiteAlpha.200" }}
        >
          About Developer
        </Button>
      </DialogTrigger>

      <DialogBackdrop />

      <DialogContent backgroundColor="gray.800" color="white">
        <DialogHeader>About the Project</DialogHeader>
        <DialogCloseTrigger />
        <DialogBody pb="6">
          <VStack align="start" gap="4">
            <Text>
              <strong>Game Hub</strong> is a high-performance discovery platform
              built to demonstrate modern web engineering and{" "}
              <strong>CI/CD pipelines</strong>.
            </Text>
            <Text fontSize="sm">
              Built by <strong>Teguh Hartono</strong>, a Senior QA Lead with 11+
              years of experience transitioning into Full-Stack Development.
            </Text>
            <Text fontSize="xs" color="gray.400">
              Stack: React, TypeScript, Vite, Chakra UI, Cloudflare Workers.
            </Text>
            <Link href="https://github.com" target="_blank" color="blue.400">
              View GitHub Profile →
            </Link>
          </VStack>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};

export default AboutModal;
