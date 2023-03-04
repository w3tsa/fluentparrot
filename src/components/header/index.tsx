import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Image, Flex, Box, Text, Button, useColorMode } from "@chakra-ui/react";

// local imports
import logoLight from "../../assets/logo_light.png";
import logoDark from "../../assets/logo_dark.png";

type Props = {};

type ImageProps = {
  src: string;
  alt: string;
  width: string;
  height: string;
};

const Header = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} mt={"20px"}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Image
          src={
            colorMode === "light"
              ? (logoLight as ImageProps["src"])
              : (logoDark as ImageProps["src"])
          }
          alt={"logo" as ImageProps["alt"]}
          width={"50px" as ImageProps["width"]}
          height={"50" as ImageProps["height"]}
        />
        <Text fontSize={"lg"} letterSpacing={1.2} fontWeight={"bold"}>
          writemecoverletter.com
        </Text>
      </Flex>
      <Box>
        <Button variant={"unstyled"} onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
        <Button>Support Project!</Button>
      </Box>
    </Flex>
  );
};

export default Header;
