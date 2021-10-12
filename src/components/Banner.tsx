import { Image } from '@chakra-ui/image'
import { Box, Flex, Text } from '@chakra-ui/layout'

const Banner = () => {
  return (
    <Flex 
        bgImage="url(images/Background.png)" 
        px="4"
        objectFit="cover"
        bgPosition="center"
        width="100vw"
        justify="space-evenly"
        align="center"
      >
        <Box>
          <Text fontSize="32px" color="#F5F8FA" mb="4">
            5 Continentes,<br/> infinitas possibilidades.
          </Text>
          <Text color="#DADADA">
            Chegou a hora de tirar do papel a viagem que você<br/> sempre sonhou.
          </Text>
        </Box>
        <Box>
          <Image src="/images/Airplane.svg" alt="Avião" mb="-30px"/>
        </Box>
      </Flex>
  )
}

export { Banner }