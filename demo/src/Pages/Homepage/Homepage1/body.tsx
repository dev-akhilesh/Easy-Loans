import React from 'react'
import { Button, ButtonGroup,Text,Flex,Box ,Image,
Heading,
VStack} from '@chakra-ui/react'
export const Body:React.FC = () => {
  return (
    <div>
        <Box bgColor={"#030925"}>
        <Flex >
            <Box w="50%"  pt="100px" >
        <Heading fontSize='6xl' color={"white"}>Business Loan With Unlimited Rewards<br/>in Lifetime</Heading>
       <Text fontSize='lg' color={"white"}>Thousands of Enterprenuers bank or widen and start or grow <br/>their Business.
            Open an account under 3 Minutes</Text>
          <Button borderRadius={"30px"} color={"white"} w="150px" backgroundColor={"teal"}>Get Started</Button>
          </Box>
          <Box>
            <Image/>
          </Box>
          </Flex>
          <Box>
            <Flex>
                <Box w="50%">
                    <Flex ml="50px">
                   <Box w="40%">
                    <Text color={"white"}>300K+ Reviews</Text>
                    <Text color={"white"}>No matters how your customer pays we help you</Text>
                   </Box>
                   <Box w="40%">
                     <Text color={"white"}>Users</Text>
                   <Text color={"white"}>No matters how your customer pays we help you</Text>
                   </Box>
                    </Flex>
                </Box>
                <Box w="40%" ml="100px">
                    <Text ml="0px" color={"white"}  >Our Supported Partners :</Text>
                    <Flex>
                        <Box w="30%"><Flex><Image src={require("../../../Utilites/microsoft.png")} w="20px"/><Text color={"white"}>Microsoft</Text></Flex></Box>
                        <Box w="30%"><Flex><Image src={require("../../../Utilites/google-pay.png")} w="40px"/><Text color={"white"}>Google-Pay</Text></Flex></Box>
                        <Box w="30%"><Flex><Image src={require("../../../Utilites/paypal.png")} w="20px"/><Text color={"white"}>PayPal</Text></Flex></Box>
                    </Flex>
                </Box>
            </Flex>
          </Box>
          </Box>
          <Box>
            <Box w="50%" ml="25%" textAlign={"center"}>
              <Text color={"gold"}>How it Works</Text>
              <Heading fontSize='6xl'>We Help You Find the Cheapest Loan</Heading>
            </Box>
            <Box>
              <Flex>
                <Box>
                  <VStack>
                   
                  </VStack>
                </Box>
                <Box>
                  <Image/>
                </Box>
              </Flex>
            </Box>
          </Box>
    </div>
  )
}
