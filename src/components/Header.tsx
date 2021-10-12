import { Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'


const Header = () => {
  return (
    <header>
        <Flex
          justify="center"
          p="5"
        >
          <Image src="/images/logo.svg" alt="logo" />
        </Flex>
      </header>
  )
}

export { Header }