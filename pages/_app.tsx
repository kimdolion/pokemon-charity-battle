import React from 'react'
import { reportAccessibility } from '@/utils/general-utils'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App

reportAccessibility(React)