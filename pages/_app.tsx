import {AppPropsType} from 'next/dist/next-server/lib/utils'
import Head from 'next/head'
import '../styles/app.css'

export default function App({Component, pageProps}: AppPropsType) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@300;400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
