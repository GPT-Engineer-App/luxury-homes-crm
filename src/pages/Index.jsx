import React from "react";
import { Box, Container, Flex, Heading, Text, Image, SimpleGrid, Button, IconButton, Stack, Input, useColorModeValue } from "@chakra-ui/react";
import { FaBuilding, FaUserTie, FaSearch } from "react-icons/fa";

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

      {/* Hero Section */}
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

      {/* Property Listings */}
      <Container maxW="6xl" mt={10}>
        <Heading as="h2" size="xl" mb={6}>
          Featured Properties
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {/* Repeat this for each property */}
          <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
            <Image src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYXxlbnwwfHx8fDE3MDk5MjgwMzZ8MA&ixlib=rb-4.0.3&q=80&w=1080" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Heading fontSize="xl" fontWeight="semibold" as="h4" lineHeight="tight">
                  Luxury Villa
                </Heading>
              </Box>
              <Text mt={2}>A stunning 5-bedroom villa with panoramic views of the city.</Text>
              <Button mt={4} leftIcon={<FaBuilding />}>
                View Details
              </Button>
            </Box>
          </Box>
          {/* End of property */}
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box bg={useColorModeValue("gray.100", "gray.900")} color={useColorModeValue("gray.600", "white")}>
        <Container as={Stack} maxW="6xl" py={4} spacing={4} justify="center" align="center">
          <Text>© 2023 Luxury Homes Real Estate, Al Ain, Abu Dhabi, UAE</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
