import Head from 'next/head'
import { Typography } from 'antd'

const { Title } = Typography

const Home: React.FC = () => (
  <>
    <Head>
      <title>Projects</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Title>Projects</Title>
  </>
)

export default Home
