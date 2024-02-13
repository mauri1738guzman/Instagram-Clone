import { Text, Flex, VStack, Box, Link } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggested for you

            </Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}> 
                See All

            </Text>
        </Flex>


    <SuggestedUser name="Dan Tyler" followers={1392} avatar='https://google.com'/>
    <SuggestedUser name="Joe Montana" followers={2282} avatar='https://google.com'/>
    <SuggestedUser name="Lionel Messi" followers={"8.4M"} avatar='https://google.com'/>


    <Box  fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
    &copy; 2023 Built by{" "}
    <Link href="https://github.com/mauri1738guzman" target="_blank" color='blue.500' fontSize={14}>Mauricio Perez</Link>
    </Box>
    </VStack>
  )
}

export default SuggestedUsers