import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function OurBranches() {
  return (
    <Box
      className="container"
      m={"auto"}
      mt={"125px"}
      bg={"#181529"}
      color={"#FEFEFE"}
      paddingTop={"70px"}
      h={"785px"}
      w={"90%"}
      borderRadius={"70px"}
    >
      <Box className="sub-container1">
        <Text fontSize="xl" color="orange" className="heading-text">
          Our Branches
        </Text>
        <Text fontSize="5xl" color="" as="b" className="sub-heading-text">
          <span style={{ color: "#5E8AF9" }}>Visit Us</span> and Get Your
          <br />
          Business Growth
        </Text>
      </Box>
      <Box className="sub-container2">
        
      </Box>
    </Box>
  );
}
