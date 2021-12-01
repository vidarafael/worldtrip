import { Box, Flex, Text, HStack, VStack } from "@chakra-ui/layout";
import { BannerContinent } from "../../components/continent/BannerContinent";
import { Header } from "../../components/Header";

export default function Continent() {
  return (
    <>
      <Header isBackHome={true}/>
      <BannerContinent />
      <Flex
        maxW="1200px"
        marginX="auto"
        padding="50px"
        align="center"
      >
        <Box w="500px" textAlign="justify">
          <Text fontSize="18px">
            A Europa é, por convenção, um dos 
            seis continentes do mundo. 
            Compreendendo a península ocidental 
            da Eurásia, a Europa geralmente 
            divide-se da Ásia a leste pela 
            divisória de águas dos montes Urais, 
            o rio Ural, o mar Cáspio, o Cáucaso, 
            e o mar Negro a sudeste
          </Text>
        </Box>
        <HStack spacing="24px" marginLeft="200px">
          <VStack spacing="-5px">
            <Text
              color="yellow.900"
              fontSize="3xl"
              fontWeight="600"
            >
              50
            </Text>
            <Text fontWeight="600">países</Text>
          </VStack>
          <VStack spacing="-5px">
            <Text
              color="yellow.900"
              fontSize="3xl"
              fontWeight="600"
            >
              60
            </Text>
            <Text fontWeight="600">línguas</Text>
          </VStack>
          <VStack spacing="-5px">
            <Text
              color="yellow.900"
              fontSize="3xl"
              fontWeight="600"
            >
              27
            </Text>
            <Text fontWeight="600">cidades +100</Text>
          </VStack>
        </HStack>
      </Flex>
    </>
  )
}