import { Image, Flex, Box, Text, Button } from "@chakra-ui/react";

// local imports
import logo from "../../assets/writemecoverletter.png";

type Props = {};

type ImageProps = {
  src: string;
  alt: string;
  width: string;
  height: string;
};

const index = (props: Props) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} mt={"20px"}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Image
          src={logo as ImageProps["src"]}
          alt={"logo" as ImageProps["alt"]}
          width={"50px" as ImageProps["width"]}
          height={"50" as ImageProps["height"]}
        />
        <Text fontSize={"sm"} letterSpacing={1.2}>
          Writemecoverletter
        </Text>
      </Flex>
      <Box>
        <Button>Support Project!</Button>
      </Box>
    </Flex>
  );
};

export default index;
