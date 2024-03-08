import React, { useState, useEffect } from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

const xmlData = `
  <properties>
    <property>
      <title>Luxury Villa</title>
      <description>A stunning 5-bedroom villa with panoramic views of the city.</description>
      <image>https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYXxlbnwwfHx8fDE3MDk5MjgwMzZ8MA&ixlib=rb-4.0.3&q=80&w=1080</image>
    </property>
    <!-- More properties can be added here -->
  </properties>
`;

const PropertyFeed = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlData, "text/xml");
      const propertyElements = xmlDoc.getElementsByTagName("property");
      const propertyList = Array.from(propertyElements).map((property) => ({
        title: property.getElementsByTagName("title")[0].textContent,
        description: property.getElementsByTagName("description")[0].textContent,
        image: property.getElementsByTagName("image")[0].textContent,
      }));

      setProperties(propertyList);
    };

    fetchProperties();
  }, []);

  return (
    <Box>
      <Heading as="h2" size="xl" mb={6}>
        Properties from XML Feed
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {properties.map((property, index) => (
          <Box key={index} maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
            <img src={property.image} alt={property.title} />
            <Box p="6">
              <Heading fontSize="xl" fontWeight="semibold" as="h4" lineHeight="tight">
                {property.title}
              </Heading>
              <Box mt={2}>{property.description}</Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PropertyFeed;
