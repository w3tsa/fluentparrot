import { Flex, Image, Text, Textarea } from "@chakra-ui/react";

// local imports
import bulletTwo from "../../assets/2-black.png";
const Resume = () => {
  return (
    <>
      <Flex alignItems={"center"} background={"1px solid black"}>
        <Image src={bulletTwo} alt={"bullet number 1"} />
        <Text fontWeight={"bold"} pb={"5px"} ml={-3}>
          Copy current resume
        </Text>
      </Flex>
      <Textarea
        isRequired
        placeholder="e.g. Software Engineer with a Focus on Diversity and Inclusion: Creating Products that Empower Everyone."
      />
    </>
  );
};

export default Resume;
