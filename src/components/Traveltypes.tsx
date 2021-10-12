import { Image } from '@chakra-ui/image'
import { Box, Flex, Text, VStack } from '@chakra-ui/layout'

const Traveltypes = () => {
  return (
    <Flex flexDirection="column" mt="128px" maxWidth="1680px" mx="auto">
      <Flex justify="space-evenly" align="center">
        <VStack spacing="24px">
          <Image src="/images/traveltypes/nightlife.svg" alt="vida noturna"/>
          <Text fontWeight="600">Vida noturna</Text>
        </VStack>
        <VStack spacing="24px">
          <Image src="/images/traveltypes/beach.svg" alt="praia"/>
          <Text fontWeight="600">Praia</Text>
        </VStack>
        <VStack spacing="24px">
          <Image src="/images/traveltypes/modern.svg" alt="moderno"/>
          <Text fontWeight="600">Moderno</Text>
        </VStack>
        <VStack spacing="24px">
          <Image src="/images/traveltypes/classic.svg" alt="classico"/>
          <Text fontWeight="600">Clássico</Text>
        </VStack>
        <VStack spacing="24px">
          <Image src="/images/traveltypes/earth.svg" alt="terra"/>
          <Text fontWeight="600">e mais...</Text>
        </VStack>
      </Flex>
      <Box maxW="660px" mx="auto" mt="64px">
        <Image src="/images/traveltypes/divider.svg" ml="22px" alt="linha preta"/>
      </Box>
      <Box maxW="1080px" mx="auto" mt="64px" textAlign="center">
        <Text fontWeight="600" fontSize="3xl">Vamos nessa?<br/> Então escolha seu continente</Text>
      </Box>
    </Flex>
  )
}

export { Traveltypes }