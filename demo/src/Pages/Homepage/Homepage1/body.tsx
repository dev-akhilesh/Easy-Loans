import React, { Component } from 'react'
import { Button, ButtonGroup,Text,Flex,Box ,Image,
Heading,
VStack,
Divider} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon,Icon } from '@chakra-ui/icons'

export const Body:React.FC = () => {
  return (
    <div>
        <Box bgColor={"#030925"}>
        <Flex  >
            <Box w="50%"  pt="100px"  >
        <Heading fontSize='6xl' color={"white"} p="30px">Business Loan With Unlimited <Box as="span" color={"#58A0F7"}>Rewards</Box><br/>in Lifetime</Heading>
       <Text fontSize='xl' color={"white"}  p="30px">Thousands of Enterprenuers bank or widen and start or grow <br/>their Business.
            Open an account under 3 Minutes</Text>
            <Box display={"flex"} alignItems={"flex-start"} pl="70px">
          <Button borderRadius={"30px"}  color={"white"} w="150px" backgroundColor={"teal"}>Get Started</Button>
          </Box>
          </Box>
          <Box w={"50%"} h="100px" borderRadius={"20%"} pt="150px">
            <Image  w="90%" h="400px" borderRadius={"20px"} src="https://cdn.dribbble.com/users/971757/screenshots/6766975/attachments/1445097/mortgage_calculator_full.png?compress=1&resize=768x576&vertical=center"/>
          </Box>
          </Flex>
          <Box pt="100px">
            <Flex>
                <Box w="50%">
                    <Flex ml="50px">
                   <Box w="40%">
                    <Text color={"white"} fontSize={"2xl"} pb="20px"><Box as="span" color={"#58A0F7"}>300K+</Box> Reviews</Text>
                    <Text color={"white"} fontSize={"xl"}>No matters how your customer pays we help you</Text>
                   </Box>
                   <Box w="40%">
                     <Text color={"white"} fontSize={"2xl"} pb="20px">Users</Text>
                   <Text color={"white"} fontSize={"xl"}>No matters how your customer pays we help you</Text>
                   </Box>
                    </Flex>
                </Box>
                <Box w="40%" ml="100px">
                    <Text  color={"white"}  fontSize={"2xl"} textAlign={"start"} pb="20px">Our Supported Partners :</Text>
                    <Flex>
                        <Box w="30%"><Flex><Image src={require("../../../Utilites/microsoft.png")} w="20px"/><Text color={"white"} fontSize={"xl"}>Microsoft</Text></Flex></Box>
                        <Box w="30%"><Flex><Image src={require("../../../Utilites/google-pay.png")} w="40px"/><Text color={"white"} fontSize={"xl"}>Google-Pay</Text></Flex></Box>
                        <Box w="30%"><Flex><Image src={require("../../../Utilites/paypal.png")} w="20px"/><Text color={"white"} fontSize={"xl"}>PayPal</Text></Flex></Box>
                    </Flex>
                </Box>
            </Flex>
          </Box>
          </Box>
          <Box pt='100px' bgColor={"#FCFCFC"}>
            <Box w="50%" ml="25%" textAlign={"center"} pb="50px">
              <Text color={"gold"} fontSize={"xl"}>How it Works</Text>
              <Heading fontSize='6xl' pt='10px'>We Help You Find the <Box as="span" color={"#58A0F7"}> Cheapest Loan</Box></Heading>
            </Box>
            <Box>
              <Flex w={"95%"} m="auto" gap={"5%"}>
                <Box w={"50%"}>
                  <VStack spacing={"50px"}>
                   <Box boxShadow='md' w='80%' p="2px">
                <Text fontSize='2xl'>  Apply Free Of Charge and without Obligations</Text>
                    <Text >Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eligendi ut iusto 
                      repellendus pariatur repudiandae iure nemo dolores et magnam!</Text>
                   </Box>
                   <Box boxShadow='md' p="2px" w='80%'>
                    <Text fontSize='2xl'>Apply Free Of Charge and without Obligations</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eligendi ut iusto 
                      repellendus pariatur repudiandae iure nemo dolores et magnam!</Text>
                   </Box>
                   <Box boxShadow='md' w='80%' p="2px">
                    <Text fontSize='2xl'>Apply Free Of Charge and without Obligations</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eligendi ut iusto 
                      repellendus pariatur repudiandae iure nemo dolores et magnam!</Text>
                   </Box>
                  </VStack>
                </Box>
                <Box w={"50%"} h="100px" borderRadius={"20%"} pt="50px">
                  <Image  w="90%" h="400px" borderRadius={"20px"} src="https://previews.123rf.com/images/prostoira777/prostoira7771701/prostoira777170100051/70019578-online-survey-checklist-hand-holds-tablet-and-finger-touch-screen-feedback-business-concept.jpg" alt="tab-image"/>
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box pt='100px' bgColor={"#FCFCFC"}>
            <Box w="50%" ml="25%" textAlign={"center"} pb="50px">
              <Text color={"gold"} fontSize={"xl"}>Our Services</Text>
              <Heading fontSize='6xl' pt='10px'>What Can <Box as="span" color={"#58A0F7"}> We Do </Box>for Your Business</Heading>
              <Text>We are on a mission to transform how business pay for large invoices,
                from SaaS and cloud to Professional and Marketing Expenses.
              </Text>
            </Box>
            <Box w="90%" m="auto">
              <VStack >
              <Divider/>
                <Flex gap="10px" textAlign={"center"} h="100px"  boxShadow='md' p="2px">
                 
                  <Box   w="3%" m="auto"><Image src={require("../../../Utilites/asterisk-solid.png")} w="20px"/></Box>
                <Box w="20%" m="auto">
                  <Text fontSize={"3xl"}>Pay For You</Text>
                  </Box>
                  <Box w="50%" m="auto">
                  <Text>It Takes two minute to complete the application and you will immideately,
                    receives offr from first banks,so you can quickly choose the best offer</Text>
                    </Box>
                    </Flex>
                    <Divider/>
                    <Flex gap="10px" textAlign={"center"} h="100px"  boxShadow='md' p="2px">
                  <Box   w="3%" m="auto"><Image src={require("../../../Utilites/asterisk-solid.png")} w="20px"/></Box>
                <Box w="20%" m="auto">
                  <Text fontSize={"3xl"}>Take Control</Text>
                  </Box>
                  <Box w="50%" m="auto">
                  <Text>It Takes two minute to complete the application and you will immideately,
                    receives offr from first banks,so you can quickly choose the best offer</Text>
                    </Box>
                    </Flex>
                    <Divider/>
                    <Flex gap="10px" textAlign={"center"} h="100px"  boxShadow='md' p="2px">
                  <Box   w="3%" m="auto"><Image src={require("../../../Utilites/asterisk-solid.png")} w="20px"/></Box>
                <Box w="20%" m="auto">
                  <Text fontSize={"3xl"}>Spend On Growth</Text>
                  </Box>
                  <Box w="50%" m="auto">
                  <Text>It Takes two minute to complete the application and you will immideately,
                    receives offr from first banks,so you can quickly choose the best offer</Text>
                    </Box>
                    </Flex>
                    <Divider/>
                    <Flex gap="10px" textAlign={"center"} h="100px"  boxShadow='md' p="2px">
                  <Box   w="3%" m="auto"><Image src={require("../../../Utilites/asterisk-solid.png")} w="20px"/></Box>
                <Box w="20%" m="auto">
                  <Text fontSize={"3xl"}>Easy Loan</Text>
                  </Box>
                  <Box w="50%" m="auto">
                  <Text>It Takes two minute to complete the application and you will immideately,
                    receives offr from first banks,so you can quickly choose the best offer</Text>
                    </Box>
                    </Flex>
                    <Divider/>
              </VStack>
            </Box>
          </Box>


    </div>
  )
}



// Continued for homepage2 Component