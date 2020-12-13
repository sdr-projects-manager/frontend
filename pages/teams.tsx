import Head from 'next/head'
import { Typography } from 'antd'

const { Title } = Typography

const Home: React.FC = () => (
  <>
    <Head>
      <title>Tasks</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Title>Teams</Title>
  </>
)

export default Home
