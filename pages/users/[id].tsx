import Head from 'next/head'
import { Typography } from 'antd'

const { Title } = Typography

const User: React.FC = () => (
  <>
    <Head>
      <title>User</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Title>Sample User</Title>
  </>
)

export default User
