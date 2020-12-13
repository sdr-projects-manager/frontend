import Head from 'next/head'
import { Typography } from 'antd'
import TaskList from '@components/Tasks/TaskList'
import TaskForm from '@components/Tasks/TaskForm'

const { Title } = Typography

const Home: React.FC = () => (
  <>
    <Head>
      <title>Tasks</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Title>Tasks</Title>
    <TaskForm />
    <TaskList />
  </>
)

export default Home
