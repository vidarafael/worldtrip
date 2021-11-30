import { Box, Text } from "@chakra-ui/layout"


const BannerContinent = () => {
  return (
    <Box 
      bg="url(../images/pages/continent/europaContinent.png)"
      bgSize="cover"
      objectFit="cover"
      bgPosition="bottom"
      // backgroundRepeat="no-repeat"
      width="100vw"
      h="500px"
    >
      <Text 
        fontSize="32px" 
        fontWeight="600"
        color="#F5F8FA" 
        mt="375px"
        ml="100px"
        display="inline-block"
      >
        Europa
      </Text>
    </Box>
  )
}

export { BannerContinent }