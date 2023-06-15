import React from "react";
import { Box, Text, Flex, Spacer, Grid, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function OurFeatures() {
  return (
    <Box className="container" mt={"125px"}>
      <Box className="sub-container1">
        <Text fontSize="xl" color="orange" className="heading-text">
          Our Features
        </Text>
        <Text fontSize="5xl" color="" as="b" className="sub-heading-text">
          What Should We <span>Help</span>
          <br />
          You With?
        </Text>
      </Box>
      <Grid
        className="sub-container2"
        templateColumns="58% 40%"
        gap={"2%"}
        w="90%"
        m="auto"
        marginTop={"75px"}
        textAlign="start"
      >
        <Box
          className="left-part"
          // bg="#030626"
          bg="#1B172D"
          color="white"
          padding={"60px"}
          borderRadius={"55px"}
          _hover={{ border: "4px solid #6200EA" }}
        >
          <Text className="left-text-1" fontSize="3xl" color="#90A4AE">
            Consolidation Loan
          </Text>
          <Text className="left-text-2" fontSize="5xl" as="b" lineHeight="55px">
            Save Your Money <br />
            on Your Loan
          </Text>
          <Text className="left-text-3" color="#90A4AE" marginTop={4}>
            {/* <Text textAlign={} text-align> */}
            Regardless of what you want to borrow money for, it <br />
            is way good idea to compare the prices.Bankly <br />
            makes it easy for you as a consumer to compare the <br /> prices of
            loans and choose the best offer.
          </Text>
          <Box
            className="get-started-btn"
            as="button"
            backgroundColor="#52DFFD"
            borderRadius={"50px"}
            w={"200px"}
            h={"55px"}
            color={"black"}
            marginTop={5}
          >
            Get Started
          </Box>
        </Box>
        <Box
          className="right-part"
          // bg="#030626"
          bg="#1B172D"
          color="white"
          padding={"60px"}
          borderRadius={"55px"}
          _hover={{ border: "4px solid #6935F6" }}
        >
          <Text className="left-text-1" fontSize="3xl" color="#90A4AE">
            New Loan
          </Text>
          <Text className="left-text-2" fontSize="4xl" as="b" lineHeight="55px">
            Compare and
            <br />
            Choose Correctly
          </Text>
          <br />
          <Link className="learn-more" href="">
            <Text color="#90A4AE" as="u">
              Learn More <ArrowForwardIcon />
            </Text>
          </Link>
        </Box>
      </Grid>
    </Box>
  );
}
