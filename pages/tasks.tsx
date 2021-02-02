import Head from '@components/Head'
import TaskForm from '@components/Tasks/TaskForm'
import TaskList from '@components/Tasks/TaskList'

const Tasks: React.FC = () => (
  <>
    <Head title="tasks" />
    <TaskForm />
    <TaskList />
  </>
)

export default Tasks
