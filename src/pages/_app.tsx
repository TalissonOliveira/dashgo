import type { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { makeServer } from '../services/mirage'
import { queryClient } from '../services/queryClient'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { theme } from '../styles/theme'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default MyApp
