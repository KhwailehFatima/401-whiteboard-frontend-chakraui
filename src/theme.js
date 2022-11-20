// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })

const projectTheme = ({
  color: {
    primary: {
      100: '#f6e05e',//yellow.300
      200: '#d69e2e',//yellow header
      300: '#6ad390',//green header
    },
    secondary: {
      100: `#D3C5EB`,
      200: '#B69BE4',
      500: '#5B2EA8'
    },
    warning: {
      100: 'orange',

    },
  },
  textStyles: {
    h1: {
      fontWeight: "bold",
      fontSize: ['4xl', '3xl', '2xl'],
      letterSpacing: 'wide'
    },
    h2: {
      fontWeight: "semibold",
      fontSize: ['1g', 'xl', '1xl'],
      letterSpacing: 'wide'
    },
    h3: {
      fontWeight: "semibold",
      fontSize: ['sm', 'md', 'lg'],
      letterSpacing: 'wide'
    }
  },
  components:{
    Button:{
      baseStyle:{
        fontWeight:'bold'
      },
      variants: {
        primary: {
          bg: 'primary.500',
          color: 'white',
          _hover: {
            bg: 'primary.400',
          },
    }
  }}}
})

export default theme
export {projectTheme}