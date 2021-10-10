import { Image } from '@chakra-ui/image'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
   <>
      <header>
        <Flex
          justify="center"
          p="5"
        >
          <Image src="/images/logo.svg" alt="logo" />
        </Flex>
      </header>
      <Flex 
        bgImage="url(images/Background.png)" 
        px="4"
        objectFit="cover"
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
   </>
  )
}

export default Home
