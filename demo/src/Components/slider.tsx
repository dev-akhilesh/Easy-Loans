  import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Text,
  Flex,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

interface ChakraSliderProps {
  name: string;
  width: string;
  amount: string;
  min: string;
  max: string;
  steps: string;
  onChange: (newValue: number) => void;
}

export const ChakraSlider = (props: ChakraSliderProps) => {
  const [value, setValue] = useState<number>(Number(props.amount) || 0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
    props.onChange(newValue);
  };

  return (
    <Box
      width={props.width}
      padding={"2%"}
      style={{
        backgroundColor: "#171525",
        boxShadow: " rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
        borderRadius: "5px",
        padding: "20px",
      }}
    >
      <Box
        display={"flex"}
        width={"100%"}
        padding={"2%"}
        justifyContent="space-between"
        fontSize={"24px"}
      >
        <Box fontSize={"24px"}>{props.name}</Box>
        <Input
          type="number"
          width={"20%"}
          value={value}
          onChange={(e) => handleChange(Number(e.target.value))}
          border="1px solid black"
        />
      </Box>
      <Slider
        aria-label="slider-ex-1"
        colorScheme="pink"
        onChange={handleChange}
        value={value}
        min={Number(props.min)}
        max={Number(props.max)}
        step={Number(props.steps)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Flex justifyContent="space-between" mt="1" fontSize="10px">
        <Text>{props.min}</Text>
        <Text>{props.max}</Text>
      </Flex>
    </Box>
  );
};
