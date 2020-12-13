import Head from 'next/head'
import { Typography } from 'antd'

const { Title } = Typography

const Raport: React.FC = () => (
  <>
    <Head>
      <title>Tasks</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Title>Sample raport</Title>
  </>
)

export default Raport
