import Head from 'next/head'
import { Typography } from 'antd'

const { Title } = Typography

const Home: React.FC = () => (
  <>
    <Head>
      <title>SDR Projects Manager</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Title>Homepage</Title>
  </>
)

export default Home
