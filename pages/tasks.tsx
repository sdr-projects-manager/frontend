import Head from '@components/Head'
import TaskForm from '@components/Tasks/TaskForm'
import TaskList from '@components/Tasks/TaskList'
import { withTranslation } from 'locale/i18n'
import { ReactNode } from 'react'

interface ITasksProps {
  t: (text: string) => ReactNode
}

const Tasks: React.FC<ITasksProps> = ({ t }) => (
  <>
    <Head title="tasks" />
    <TaskForm />
    <TaskList />
  </>
)

export default withTranslation('common')(Tasks)
