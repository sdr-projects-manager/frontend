import Head from '@components/Head'
import TaskForm from '@components/Tasks/TaskForm'
import TaskList from '@components/Tasks/TaskList'
import { Typography } from 'antd'

const { Title } = Typography

const Tasks: React.FC = () => (
  <>
    <Head title="Tasks" />
    <Title>Tasks</Title>
    <TaskForm />
    <TaskList />
  </>
)

export default Tasks
