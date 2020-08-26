import {AppPropsType} from 'next/dist/next-server/lib/utils'
import '../styles/app.css'

export default function App({Component, pageProps}: AppPropsType) {
  return <Component {...pageProps} />
}
