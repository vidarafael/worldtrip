import { Box, Flex, Link } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { AiOutlineLeft } from "react-icons/ai";

interface IHeaderProps {
  isBackHome?: boolean
}

const Header = ({isBackHome}: IHeaderProps) => {
  return isBackHome ? (
    <header>
        <Flex
          align="center"
          justify="space-between"
          py="5"
          px={[5, "100px"]}
        >
          <Link href="/"><AiOutlineLeft size={24}/></Link>
          <Image src="/images/logo.svg" alt="logo" />
          <Box></Box>
        </Flex>
      </header>
  ) : (
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