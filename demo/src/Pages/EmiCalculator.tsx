import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ChakraSlider } from "../Components/slider";
import { Link } from "react-router-dom";
import { wrap } from "module";
import { color } from "framer-motion";
import { Bar } from 'react-chartjs-2';
import { Barchart } from "../Components/Barchart";
import { ArcElement, BarElement, CategoryScale, Chart, LinearScale, Tooltip, plugins } from "chart.js";
import { Piechart } from "../Components/Piechart";

Chart.register(CategoryScale);
Chart.register(LinearScale)
Chart.register(BarElement)
Chart.register(ArcElement,Tooltip,plugins)
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
  
  const chartData ={
    labels: ['EMI Amount', 'Total Payment', 'Total Interest'],
    datasets: [
      {
        label: 'Values',
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderColor: 'rgba(255,255,255,0.8)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [emi, emi* +loanTenure * 12, emi*  +loanTenure * 12 - loanAmount],
      },
    ],
  };

  const pieChartData = {
    labels: ['EMI Amount', 'Total Payment', 'Total Interest'],
    datasets: [
      {
        data: [emi, emi * +loanTenure * 12, emi * +loanTenure * 12 - loanAmount],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
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
        <Box  >
          <Flex gap={"100px"}>
            <Box width={"40%"} ml="10%" >
              <Barchart  data={chartData} 
                options={{
                 scales: {
                   x: {
                type: 'category', // Using category scale for x-axis
                labels: ['EMI Amount', 'Total Payment', 'Total Interest'], // Providing labels
                 },
                 y: {
                beginAtZero: true,
                ticks: {
                  stepSize: 500, // Adjust the step size as needed
                   },
                  },
                  },
              }}/>
            </Box>
          <Box width={"30%"}  >
            <Piechart  data={pieChartData} 
              options={{
                plugins: {
                  tooltip: {
                    enabled: false, // Disable default tooltips
                    external: (context) => {
                      const dataIndex = context.tooltip.dataPoints[0].dataIndex;
                      const label = pieChartData.labels[dataIndex];
                      const value = pieChartData.datasets[0].data[dataIndex];
                      const total = pieChartData.datasets[0].data.reduce((acc, val) => acc + val, 0);
                      const percentage = ((value / total) * 100).toFixed(2);

                      return (
                        <div style={{ backgroundColor: 'white', padding: '5px' }}>
                          {`${label}: ${value} (${percentage}%)`}
                        </div>
                      );
                    },
                  },
                },
              }}
              />
          </Box>
          </Flex>
      </Box>
    </div>
  );
};

export default EmiCalculator;
