
import React from "react";
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

export const LoanApplicationPage:React.FC = () => {
  const queryParams = new URLSearchParams(window.location.search);

  // Access the values of the query parameters
  const loanTenure = queryParams.get("loanTenure") || '';
  const loanRate = queryParams.get("loanRate") || "";
  const emi = queryParams.get("emi") || "";
  const loanAmount = queryParams.get("loanAmount") || "";
  console.log(loanAmount,loanAmount,loanRate,loanTenure,emi)


  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault()
  }
  return (
    <Box
    p={4}
    maxW="lg"
    mx="auto"
    borderWidth="1px"
    borderRadius="lg"
    boxShadow="md"
  >
    <Heading as="h2" size="xl" mb={4}>
      Loan Application Form
    </Heading>
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} align="start">
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Your Name" name="name" />
        </FormControl>

        <FormControl id="loanType" isRequired>
          <FormLabel>Type of Loan</FormLabel>
          <Select placeholder="Select Loan Type" name="loanType">
            <option value="personal">Personal Loan</option>
            <option value="home">Home Loan</option>
            <option value="auto">Auto Loan</option>
            {/* Add more loan types as needed */}
          </Select>
        </FormControl>

        <FormControl id="loanAmount" isRequired>
          <FormLabel>Loan Amount</FormLabel>
          <Input type="number" placeholder="Loan Amount" name="loanAmount" defaultValue={loanAmount}/>
        </FormControl>

        <FormControl id="loanTenure" isRequired>
          <FormLabel>Loan Tenure (years)</FormLabel>
          <Input type="number" placeholder="Loan Tenure" name="loanTenure" defaultValue={loanTenure}/>
        </FormControl>

        <FormControl id="loanTenure" isRequired>
          <FormLabel>Loan Tenure (years)</FormLabel>
          <Input type="number" placeholder="Loan Tenure" name="loanTenure" defaultValue={loanTenure}/>
        </FormControl>

        <FormControl id="loanTenure" isRequired>
          <FormLabel>Loan Tenure (years)</FormLabel>
          <Input type="number" placeholder="Loan Tenure" name="loanTenure" defaultValue={loanTenure}/>
        </FormControl>
        <FormControl id="loanTenure" isRequired>
          <FormLabel>Loan Tenure (years)</FormLabel>
          <Input type="number" placeholder="Loan Tenure" name="loanTenure" defaultValue={loanTenure}/>
        </FormControl>

        <FormControl id="emi" isRequired>
          <FormLabel>EMI Amount</FormLabel>
          <Input type="number" placeholder="EMI Amount" name="emi" defaultValue={emi}/>
        </FormControl>

        <FormControl id="loanRate" isRequired>
          <FormLabel>Loan Rate (% p.a.)</FormLabel>
          <Input type="number" placeholder="Loan Rate" name="loanRate" defaultValue={loanRate}/>
        </FormControl>

        <FormControl id="address" isRequired>
          <FormLabel>Address</FormLabel>
          <Input type="text" placeholder="Your Address" name="address" />
        </FormControl>

        <FormControl id="bankAccountNo" isRequired>
          <FormLabel>Bank Account Number</FormLabel>
          <Input
            type="text"
            placeholder="Bank Account Number"
            name="bankAccountNo"
          />
        </FormControl>

        <FormControl id="cibilScore" isRequired>
          <FormLabel>CIBIL Score</FormLabel>
          <Input type="number" placeholder="CIBIL Score" name="cibilScore" />
        </FormControl>

        <Button
          type="submit"
          colorScheme="teal"
          width="100%"
          mt={4}
          size="lg"
        >
          Submit
        </Button>
      </VStack>
    </form>
  </Box>
);
};
  

