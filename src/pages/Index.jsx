import React from "react";
import { Box, Container, Flex, Heading, Text, Button, IconButton, Stack, Input, useColorModeValue } from "@chakra-ui/react";
import { FaBuilding, FaUserTie, FaSearch } from "react-icons/fa";
import PropertyFeed from "../components/PropertyFeed";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="header" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg={useColorModeValue("gray.100", "gray.900")} color={useColorModeValue("gray.600", "white")}>
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Luxury Homes Real Estate
          </Heading>
        </Flex>

        <Stack direction={{ base: "column", md: "row" }} spacing="24px">
          <Button leftIcon={<FaBuilding />}>Properties</Button>
          <Button leftIcon={<FaUserTie />}>Agents</Button>
          <Button>Contact Us</Button>
        </Stack>
      </Flex>

      {}
      <Flex align="center" justify="center" height="400px" bg="teal.500">
        <Stack textAlign="center" align="center">
          <Heading fontSize="5xl" fontWeight="bold" color="white">
            Find Your Dream Home in Al Ain
          </Heading>
          <Text color="white" maxW="lg">
            Explore our luxury properties and find your perfect fit in the heart of Abu Dhabi.
          </Text>
          <Flex mt={4}>
            <Input placeholder="Search properties" />
            <IconButton colorScheme="blue" aria-label="Search database" icon={<FaSearch />} />
          </Flex>
        </Stack>
      </Flex>
      {}
      <Container maxW="6xl" mt={10}>
        <PropertyFeed />
      </Container>

      {}
      <Box as="footer" bg={useColorModeValue("gray.100", "gray.900")} color={useColorModeValue("gray.600", "white")}>
        <Container as={Stack} maxW="6xl" py={4} spacing={4} justify="center" align="center">
          <Text>© 2024 Luxury Homes Real Estate, Al Ain, Abu Dhabi, UAE</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
