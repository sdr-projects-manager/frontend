import { AppProps } from 'next/dist/next-server/lib/router/router'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default MyApp
