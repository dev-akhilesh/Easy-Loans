import { Box, Button, Flex ,Text,Heading} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ChakraSlider } from "../Components/slider";
import { Link } from "react-router-dom";
import { Barchart } from "../Components/Barchart";
import { ArcElement, BarElement, CategoryScale, Chart, ChartOptions, LineElement, LinearScale, PointElement, Tooltip, plugins } from "chart.js";
import { Piechart } from "../Components/Piechart";
import { Linechart } from "../Components/Linechart";

Chart.register(CategoryScale);
Chart.register(LinearScale)
Chart.register(BarElement)
Chart.register(ArcElement,Tooltip,plugins)
Chart.register(PointElement,LineElement)
const EmiCalculator = () => {
 
  
  const [loanAmount, setLoanAmount] = useState<number>(5000);
  const [loanTenure, setLoanTenure] = useState<number>(0.25);
  const [loanRate, setLoanRate] = useState<number>(8.25);
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

  //BarChart Data //
  
  const chartData ={
    labels: ['EMI Amount', 'Total Payment', 'Total Interest'],
    datasets: [
      {
        label: 'Values',
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderColor: '#f44336',
        borderWidth: 2,
        hoverBackgroundColor: '#43a047',
        hoverBorderColor: '#43a047',
        data: [emi, emi* +loanTenure * 12, emi*  +loanTenure * 12 - loanAmount],
      },
    ],
  };

  //Pie Chart Data//

  const pieChartData = {
    labels: ['EMI Amount', 'Total Payment', 'Total Interest'],
    datasets: [
      {
        data: [emi, emi * +loanTenure * 12, emi * +loanTenure * 12 - loanAmount],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };


  //Line Chart Data//

  const monthlyData = [];
  const monthlyRate = loanRate / 120;
  const totalMonths = loanTenure * 12;
  
  for (let i = 0; i < totalMonths; i++) {
    const remainingPrincipal = emi * totalMonths - (emi * i);
    const monthlyInterest = remainingPrincipal * monthlyRate;
    const monthlyPrincipal = emi - monthlyInterest;
    monthlyData.push(monthlyPrincipal);
  }
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Replace with your own labels
    datasets: [
      {
        label: 'Monthly Data',
        data: monthlyData, // Replace with your own data
        fill: false,
        borderColor: 'pink', // Replace with your desired color
        tension: 0.3,
      },
    ],
  };

  const lineChartOptions = {
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: "#ffff", // Change the color of the x-axis grid lines
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#ffff", // Change the color of the y-axis grid lines
        },
      },
    },
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
          Personal Loan <Box as="span" color={"#58A0F7"}>EMI </Box>Calculator
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
              min="8.25"
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
                backgroundColor={"#58A0F7"}
                color={"white"}
                _hover={{ backgroundColor: "red" }}
              >
                Apply Loan
              </Button>
            </Link>
          </Box>
        </Flex>
        </Box>
        <Box >
          <Box  mb={'30px'}>
            <Heading fontSize='5xl'>Stastical <Box as="span" color={"#58A0F7"}>Analysis</Box></Heading>
          </Box>
          {/* <Flex gap={"100px"}> */}
          <Box width="100%" display={{ base: 'block', md: 'flex' }} flexWrap={{ md: 'nowrap' }}>
            <Box width={{ base: '100%', md: '40%' }} mb={{ base: '20px', md: 0 }} ml="10%"  boxShadow="dark-lg" rounded={"md"}>
              <Heading  fontSize='3xl' color={"#58A0F7"}>Bar Chart</Heading>
              <Barchart  data={chartData} 
                options={{
                 scales: {
                   x: {
                type: 'category', // Using category scale for x-axis
                labels: ['EMI Amount', 'Total Payment', 'Total Interest'],
                grid: {
                  color: "rgba(255, 255, 255, 0.1)", // Change the color of the x-axis grid lines
                }, // Providing labels
                 },
                 y: {
                beginAtZero: true,
                ticks: {
                  stepSize: 500, // Adjust the step size as needed
                   },
                   grid: {
                    color: "rgba(255, 255, 255, 0.1)", // Change the color of the y-axis grid lines
                  },
                  },
                  },
              }}/>
            </Box>
          <Box width={{ base: '100%', md: '30%' }} ml={"10%"}  boxShadow="dark-lg" rounded={"md"}>
          <Heading  fontSize='3xl' color={"#58A0F7"}>Pie Chart</Heading>
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
          </Box>
          <Box  width="80%" m={{ base: "5%", md: "10%" }}  boxShadow="dark-lg" rounded={"md"}>
           {/* line CHart here should be implement */}
           <Heading  fontSize='3xl' color={"#58A0F7"}>Line Chart</Heading>
          <Linechart data={lineChartData} options={lineChartOptions}/>


          </Box>
      </Box>
    </div>
  );
};

export default EmiCalculator;
