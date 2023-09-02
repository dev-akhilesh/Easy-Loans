
import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'

export const LoanApplicationPage:React.FC = () => {
  const queryParams = new URLSearchParams(window.location.search);

  // Access the values of the query parameters
  const loanTenure = queryParams.get("loanTenure") || '';
  const loanRate = queryParams.get("loanRate") || "";
  const emi = queryParams.get("emi") || "";
  const loanAmount = queryParams.get("loanAmount") || "";
  const [cibilScore,setCibilScore]=useState<number>(0)
  const toast=useToast()
  console.log(loanAmount,loanAmount,loanRate,loanTenure,emi)


  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement);
    const formValues: Record<string, string> = {};

    formData.forEach((value, key) => {
      formValues[key] = value as string;
    });

    // Check CIBIL score
    const cibilScoreValue = parseInt(formValues["cibilScore"], 10);

    if (cibilScoreValue < 300) {
      // Show a toast message if CIBIL score is too low
      toast({
        title: 'Loan Rejected.',
        description: "Cibil Score too low to approved.",
        position: 'top',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    } else {
      // Store form data in local storage
      localStorage.setItem("loanApplicationData", JSON.stringify(formValues));
      toast({
        title: 'Application Approved.',
        description: "Data Verification is in Process.",
        position: 'top',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      // Redirect to the thank-you page using window.location
      window.location.href = "/thankYouPage";
    }
  }
  return (
    <div style={{backgroundColor:"#130f24"}}>
    <Box
    p={4}
    maxW="lg"
    mx="auto"
    bg={"#171525"}
    borderRadius="lg"
    boxShadow="dark-lg" 
    rounded={"md"}
    color={"gray.800"}
  >
    <Heading as="h2" size="xl" mb={4} color={"white"}>
      Loan Application Form
    </Heading>
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} align="start">
        <FormControl id="name" isRequired>
          <FormLabel color={"white"}>Name</FormLabel>
          <Input type="text" 
          placeholder="Your Name" 
          name="name" 
          border={"none"}
          bg={"white"}
          />
        </FormControl>

        <FormControl id="loanType" isRequired>
          <FormLabel color={"white"}>Type of Loan</FormLabel>
          <Select placeholder="Select Loan Type" name="loanType" border={"none"}  bg={"white"}>
            <option value="personal">Personal Loan</option>
            <option value="home">Home Loan</option>
            <option value="auto">Auto Loan</option>
            {/* Add more loan types as needed */}
          </Select>
        </FormControl>

        <FormControl id="loanAmount" isRequired>
          <FormLabel color={"white"}>Loan Amount</FormLabel>
          <Input type="number" 
          placeholder="Loan Amount" 
          name="loanAmount" 
          border={"none"} 
          defaultValue={loanAmount}
           bg={"white"}
           />
        </FormControl>

        <FormControl id="loanTenure" isRequired>
          <FormLabel color={"white"}>Loan Tenure (years)</FormLabel>
          <Input type="number" 
          placeholder="Loan Tenure" 
          name="loanTenure" 
          border={"none"} 
          defaultValue={loanTenure}
           bg={"white"}
           />
        </FormControl>

        <FormControl id="emi" isRequired>
          <FormLabel color={"white"}>EMI Amount</FormLabel>
          <Input type="number" 
          placeholder="EMI Amount" 
          name="emi"  
          border={"none"} 
          defaultValue={emi}
          bg={"white"}
          />
        </FormControl>

        <FormControl id="loanRate" isRequired>
          <FormLabel color={"white"}>Loan Rate (% p.a.)</FormLabel>
          <Input type="number" 
          placeholder="Loan Rate" 
          name="loanRate" 
          border={"none"}  
          defaultValue={loanRate}
          bg={"white"}
          />
        </FormControl>

        <FormControl id="address" isRequired>
          <FormLabel color={"white"}>Address</FormLabel>
          <Input type="text" 
          placeholder="Your Address" 
          border={"none"} 
          name="address" 
          bg={"white"}
          />
        </FormControl>

        <FormControl id="bankAccountNo" isRequired>
          <FormLabel color={"white"}>Bank Account Number</FormLabel>
          <Input
            type="text"
            placeholder="Bank Account Number"
            name="bankAccountNo"
            border={"none"}
            bg={"white"}
          />
        </FormControl>

        <FormControl id="cibilScore" isRequired>
          <FormLabel color={"white"}>CIBIL Score</FormLabel>
          <Input type="number"
           placeholder="CIBIL Score" 
           name="cibilScore" 
           border={"none"} 
          bg={"white"}/>
        </FormControl>

        <Button
          type="submit"
          bg="#9fb43a"
          width="100%"
          mt={4}
          size="lg"
        >
          Submit
        </Button>
      </VStack>
    </form>
  </Box>
  </div>
);
};
  

