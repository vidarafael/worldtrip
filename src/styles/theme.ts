import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    yellow: {
      '900': '#FFBA08',
    },
    black: {
      '700': '#47585B',
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        color: 'black.700'
      }
    },
  }
})