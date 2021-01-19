import Head from 'next/head'
import { Typography } from 'antd'

const { Title } = Typography

const Home: React.FC = () => (
  <>
    <Head>
      <title>Users</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Title>Users</Title>
  </>
)

export default Home
