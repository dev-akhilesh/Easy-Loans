import React from "react";
import {
  Box,
  Text,
  Flex,
  Avatar,
  chakra,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";

const testimonials = [
  {
    name: "Sachin Patil",
    role: "Manufacturer of Fertilizer - Sole Proprietor",
    content:
      "CreditEnable helped me get the perfect business financial loan in record time. My business is growing fast, and I wanted a loan that I could pay back later so that my cash flow didn’t get impacted. The online business loan they enabled was so easy to get! Their lender-matching tech is so good that one of their partner lenders said yes to me the next day and cash was in my account that week. No hassle, No Comparing. CreditEnable is amazing!",
    avatar:
      "https://t3.ftcdn.net/jpg/04/38/83/06/240_F_438830653_xouYSy0iYiLnrZZj6iTAjIyPKdHKqO7e.jpg",
  },
  {
    name: "Harikesh Tripati",
    role: "Transportation of Goods - Sole Proprietor",
    content:
      "At first, I didn't believe in CreditEnable and tried to go out on my own for months. Their online business loan service sounded too good to be true. But after applying to multiple lenders, no one was lending credit to me. So, I finally decided to try CreditEnable, and thank God I did! They helped me get an MSME loan that perfectly matched my business needs within days! They are truly making small business lending hassle-free and affordable!",
    avatar:
      "https://t3.ftcdn.net/jpg/02/48/15/86/240_F_248158608_0ErNeAWWx6GZVDCg66jNRoPGEhHCSpaJ.jpg",
  },
  {
    name: "Bishnudev Singh",
    role: "Sunitha Machining Works",
    content:
      "I give CreditEnable 5 stars! Their team was responsive, helpful, and knowledgeable! They patiently walked me through the MSME loan details, so I fully understood the credit underwriting process and the documents I needed to get my business funding. After helping me prepare my application, they promptly got me the right financial loan to purchase the raw materials I needed to fulfil my contracts on time. Thank you, CreditEnable!",
    avatar:
      "https://t4.ftcdn.net/jpg/04/54/71/89/240_F_454718948_mUBnE4lIy5gWn2jMyA96NaA30PQ0rUmK.jpg",
  },
  {
    name: "Daniel T.",
    role: "Chief Marketing Officer",
    content:
      "The turn-around time for disbursing loan was very quick.With Ashv, the process was fast. Hassle-free. We could fund our cash-flow expenses during a crucial period.I needed to get my business funding. After helping me prepare my application, they promptly got me the right financial loan.They are truly making small business lending hassle-free and affordable. I needed to fulfil my contracts on time. Thank you, CreditEnable!",
    avatar:
      " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWT916ZIZzh7ZTuRB9cq3yVWptueIy-eKYw&usqp=CAU",
  },
];

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  index: number;
}

function TestimonialCard(props: TestimonialCardProps) {
  const { name, role, content, avatar, index } = props;
  return (
    <Flex
      className="testimonial-card"
      boxShadow={"lg"}
      maxW={"640px"}
      direction={{ base: "column-reverse", md: "row" }}
      width={"full"}
      rounded={"xl"}
      p={10}
      justifyContent={"space-between"}
      position={"relative"}
      // bg={useColorModeValue("white", "gray.800")}
      bg={"#F8F7FC"}
      _after={{
        content: '""',
        position: "absolute",
        // height: "21px",
        height: "24px",
        width: "29px",
        left: "35px",
        top: "-14px",
        backgroundSize: "cover",
        backgroundImage: `url("https://cdn2.iconfinder.com/data/icons/flat-seo-web-ikooni/128/flat_seo2-39-512.png")`,
      }}
      _before={{
        content: '""',
        position: "absolute",
        zIndex: "-1",
        height: "full",
        maxW: "640px",
        width: "full",
        filter: "blur(10px)",
        transform: "scale(0.98)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        top: 0,
        left: 0,
        backgroundImage: `url("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg")`,
      }}
    >
      <Flex
        direction={"column"}
        textAlign={"left"}
        justifyContent={"space-between"}
      >
        <chakra.p
          fontFamily={"Inter"}
          fontWeight={"medium"}
          fontSize={"15px"}
          pb={4}
        >
          {content}
        </chakra.p>
        <chakra.p fontFamily={"Work Sans"} fontWeight={"bold"} fontSize={14}>
          {name}
          <chakra.span
            fontFamily={"Inter"}
            fontWeight={"medium"}
            color={"gray.500"}
          >
            {" "}
            - {role}
          </chakra.span>
        </chakra.p>
      </Flex>
      <Avatar
        src={avatar}
        height={"80px"}
        width={"80px"}
        alignSelf={"center"}
        m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
      />
    </Flex>
  );
}

export default function Testimonial() {
  return (
    <Box className="container" mt={"170px"}>
      <Box className="sub-container1">
        <Text fontSize="xl" color="orange" className="heading-text">
          Testimonial
        </Text>
        <Text fontSize="5xl" color="" as="b" className="sub-heading-text">
          What our Loyal
          <br />
          <span style={{ color: "#5E8AF9" }}>Customer Saying</span>{" "}
        </Text>
      </Box>
      <Flex
        className="sub-container2"
        textAlign={"center"}
        pt={10}
        justifyContent={"center"}
        direction={"column"}
        width={"full"}
        overflow={"hidden"}
      >
        <SimpleGrid
          className="card-grid"
          columns={{ base: 1, xl: 2 }}
          spacing={"20"}
          m={"auto"}
          mt={12}
          // mb={"180px"}
          mx={"auto"}
          // color={"#F8F7FC"}
          w={"95%"}
        >
          {testimonials.map((cardInfo, index) => (
            <TestimonialCard {...cardInfo} index={index} />
          ))}
        </SimpleGrid>
        <Box>
          <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color={"purple.400"}>
            <path
              fill={"currentColor"}
              d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
            />
          </Icon>
        </Box>
      </Flex>
    </Box>
  );
}
