import { Box, Flex, Text, Link, Icon, VStack, HStack } from "@chakra-ui/react";
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box w="100%" h="100vh" bg="blue.900" color="white" bgImage="https://images.unsplash.com/photo-1493134799591-2c9eed26201a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZXxlbnwwfHx8fDE3MDkzODAxOTd8MA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPos="center">
      <VStack h="100%" justify="center" align="center" spacing={4}>
        <Text fontSize="6xl" fontWeight="bold" textTransform="uppercase" lineHeight="shorter">
          Jon Sintorn
        </Text>
        <Box h="2px" w="80px" bg="white" />

        <HStack spacing={6}>
          <Link href="https://www.linkedin.com/in/jonsintorn" isExternal>
            <Icon as={FaLinkedin} w={6} h={6} />
          </Link>
          <Link href="mailto:jon.sintorn@sintornado.com">
            <Icon as={FaEnvelope} w={6} h={6} />
          </Link>
        </HStack>

        <Flex align="center">
          <Icon as={FaMapMarkerAlt} w={5} h={5} mr={2} />
          <Text>Stockholm, Sweden</Text>
        </Flex>
      </VStack>

      <Flex as="footer" p={4} justify="center" pos="absolute" bottom={0} w="full">
        <Text fontSize="sm">&copy; Sintornado AB</Text>
      </Flex>
    </Box>
  );
};

export default Index;
