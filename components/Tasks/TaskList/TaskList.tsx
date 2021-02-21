import Column from 'antd/lib/table/Column'
import { Spin, Table, Tag } from 'antd'
import { withTranslation } from 'locale/i18n'
import { useQuery } from 'react-query'
import Tasks from 'services/Api/endpoints/Tasks'
import { isError } from '@utils/isError'
import { toast } from 'react-toastify'
import FormModal from '@components/FormModal'
import ButtonDelete from '@components/buttons/Delete'
import { ITask } from 'types/ITasks'
import { TasksQuery } from 'types/IQuries'
import { getFormatedStatus } from '@utils/getFormatedStatus'
import { getFormatedPrice } from '@utils/getFormatedPrice'
import TaskForm from '../TaskForm'

interface IProps {
  t: (text: string) => string
}

const TasksList: React.FC<IProps> = ({ t }) => {
  const { isLoading, error, data } = useQuery(TasksQuery, () =>
    new Tasks().get().then((res) => res.data)
  )

  if (isError(error)) toast.error(t(error.message))

  return (
    <>
      <div>
        <FormModal FormComponent={<TaskForm />} type="add" />
      </div>
      {isLoading && <Spin />}
      {data && (
        <Table dataSource={data} rowKey="id">
          <Column title={t('name')} dataIndex="name" key="name" />
          <Column
            title={t('description')}
            dataIndex="description"
            key="description"
          />
          <Column
            title={t('project')}
            dataIndex="project"
            key="project"
            render={(project) => project.name}
          />
          <Column
            title={t('cost')}
            dataIndex="cost"
            key="cost"
            render={(cost) => getFormatedPrice(cost)}
          />
          <Column
            title={t('state')}
            dataIndex="state"
            key="state"
            render={(state) => {
              const formatedStatus = getFormatedStatus(state)
              return (
                <Tag color={formatedStatus.color} key={state}>
                  {t(formatedStatus.name)}
                </Tag>
              )
            }}
          />
          <Column
            title={t('Edit')}
            render={(values: ITask) => (
              <FormModal
                FormComponent={
                  <TaskForm
                    initialValues={{ ...values, projectId: values.project?.id }}
                  />
                }
                type="edit"
              />
            )}
          />
          <Column
            title={t('Delete')}
            dataIndex="delete"
            key="delete"
            render={(_value, { id }: ITask) => (
              <ButtonDelete
                deleteMethod={() => new Tasks().delete(id)}
                queryKey="tasks"
              />
            )}
          />
        </Table>
      )}
    </>
  )
}
export default withTranslation('common')(TasksList)
