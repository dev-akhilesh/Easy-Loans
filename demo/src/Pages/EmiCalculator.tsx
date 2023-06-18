import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ChakraSlider } from "../Components/slider";
import { Link } from "react-router-dom";
import { wrap } from "module";
import { color } from "framer-motion";

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState<number>(5000);
  const [loanTenure, setLoanTenure] = useState<number>(0.25);
  const [loanRate, setLoanRate] = useState<number>(10.25);
  const [emi, setEmi] = useState<number>(0);

  const handleLoanAmount = (e: number) => {
    setLoanAmount(e);
  };

  const handleLoanTenure = (e: number) => {
    setLoanTenure(e);
  };

  const handleLoanRate = (e: number) => {
    setLoanRate(e);
  };

  const calculateEMI = () => {
    const monthlyRate = loanRate / 120;
    const totalMonths = loanTenure * 12;
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
    setEmi(Number(emi.toFixed(1)));
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, loanRate, loanTenure]);

  return (
    <div
      style={{
        backgroundColor: "#130f24",
        color: "white",
        paddingBottom: "50px",
      }}
    >
      <Box
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        // height={"100px"}
        color="white"
        backgroundColor={"#171525"}
        fontWeight={"bold"}
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        // bg="white"
        // marginTop={"50px"}
      >
        <Box fontSize={{ base: "24px", md: "40px" }}>
          Personal Loan EMI Calculator
        </Box>
        <Box fontSize={{ base: "14px", md: "20px" }}>
          Calculate your EMI and choose the most suitable product for you
        </Box>
      </Box>

      <Box
        height={"auto"}
        width={{ base: "90%", md: "80%" }}
        margin="auto"
        marginBottom={"100px"}
        marginTop={"100px"}
      >
        <Box
          textAlign="center"
          display="flex"
          // alignItems="center"
          justifyContent="center"
          fontSize={{ base: "16px", md: "24px" }}
          marginTop={{ base: "10px", md: "0" }}
          marginBottom={"50px"}
          // border={"1px solid white"}
        >
          EMI CALCULATOR
        </Box>
        <Flex flexWrap={"wrap"}>
          <Box width={{ base: "100%", md: "50%" }}>
            <ChakraSlider
              name={"Loan Amount"}
              amount="5000"
              width="70%"
              min="2000"
              max="50000"
              steps="2000"
              onChange={handleLoanAmount}
            />
            <ChakraSlider
              name={"Tenure (years)"}
              amount="0.25"
              width="70%"
              min="0.25"
              max="3.5"
              steps="0.25"
              onChange={handleLoanTenure}
            />
            <ChakraSlider
              name={"Rate Of Interest (% p.a.)"}
              amount="10.25"
              width="70%"
              min="10.25"
              max="30"
              steps="0.25"
              onChange={handleLoanRate}
            />
          </Box>
          <Box
            marginTop={{ base: "5%", md: "0" }}
            marginLeft={{ base: "0", md: "10%" }}
            width={{ base: "100%", md: "40%" }}
            textAlign="center"
            style={{
              backgroundColor: "#171525",
              boxShadow: " rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
              borderRadius: "5px",
              padding: "20px",
            }}
          >
            <Box>Your EMI Amount</Box>
            <Box fontSize={"30px"}>{emi}</Box>
            <Box fontSize={"24px"}>Total Payment</Box>
            <Box>{(emi * +loanTenure * 12).toFixed(0)}</Box>
            <Box fontSize={"24px"}>Total Interest</Box>
            <Box>{(emi * +loanTenure * 12 - loanAmount).toFixed(0)}</Box>
            <Link to="/loanApplicationPage">
              <Button
                fontSize={"24px"}
                margin={"10px 0px 40px 0px"}
                backgroundColor={"#52DFFD"}
                color={"white"}
                _hover={{ backgroundColor: "red" }}
              >
                Apply Loan
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default EmiCalculator;
