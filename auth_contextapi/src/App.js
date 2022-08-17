import React from 'react';
import {ChakraProvider,theme} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Navbar } from './component/Navbar';
import { Display } from './component/Display';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Display />
    </ChakraProvider>
  );
}

export default App;
