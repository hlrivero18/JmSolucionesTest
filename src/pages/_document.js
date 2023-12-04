import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Tabla de Registros</title>
      </Head>
      <body className={`dark:bg-gray-800`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
