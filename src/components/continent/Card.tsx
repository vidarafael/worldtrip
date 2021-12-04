import { Image } from "@chakra-ui/image"
import { Box, Flex, Text, VStack } from "@chakra-ui/layout"


const Card = () => {
  return (
    <Box 
      width="250px" 
      border="1px solid #ffb9087d"
      borderRadius="5px"
      marginY="30px"
      marginX="25px"
      display="inline-block"
    >
      <Image 
        src="/images/pages/continent/components/Londres.png" 
        alt="no src"
        borderRadius="5px 5px 0 0"
      />
      <Flex
        align="center"
        justify="space-around"
        height="100px"

      >
        <VStack  align="left">
          <Text 
            fontWeight="600" 
            fontSize="18px"
          >Londres</Text>
          <Text
            fontSize="15px"
            color="#999999"
          >
            Reino Unido
          </Text>
        </VStack>
        <Image src="/images/pages/continent/components/Londresmini.png" alt="no src"/>
      </Flex>
    </Box>
  )
}

export { Card }