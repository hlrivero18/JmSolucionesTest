import { Html, Head, Main, NextScript } from 'next/document'
import NavBar from '@/components/NavBar/NavBar'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`dark:bg-gray-800`}>
        <NavBar/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
