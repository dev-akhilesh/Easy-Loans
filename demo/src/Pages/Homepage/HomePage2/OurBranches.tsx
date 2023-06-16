import React from "react";
import { Box, Text, Grid, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function OurBranches() {
  return (
    <Box className="container" mt={"125px"}>
      <Box className="sub-container1">
        <Text fontSize="xl" color="orange" className="heading-text">
          Our Branches
        </Text>
        <Text fontSize="5xl" color="" as="b" className="sub-heading-text">
          Visit Us and Get Your
          <br />
          Business Growth
        </Text>
      </Box>
    </Box>
  );
}