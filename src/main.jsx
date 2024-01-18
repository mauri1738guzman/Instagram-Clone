import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react' //-- This is here to set the theme to black 
import {mode} from '@chakra-ui/theme-tools'
import { BrowserRouter } from 'react-router-dom'


const styles = {

  global: (props) => ({
    body: {
      bg:mode("gray.100", "#000")(props),
      color:mode("gray.800", "whiteApha.900")(props)
    }
  })
}

//-- The theme implementation is below:
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config,styles })



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}> 

       {/*This is for the Chakra Provider or templates using css maybe Javascript */}
      <App />

    </ChakraProvider>
    </BrowserRouter>
   
  </React.StrictMode>,
)
