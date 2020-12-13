import Head from 'next/head'
import { Typography } from 'antd'
import TaskList from '@components/Tasks/TaskList'

const { Title } = Typography

const Home: React.FC = () => (
  <>
    <Head>
      <title>Tasks</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Title>Tasks</Title>
    <TaskList />
  </>
)

export default Home
