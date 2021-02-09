import Column from 'antd/lib/table/Column'
import { Spin, Table, Tag } from 'antd'
import { getTagColor } from '@utils/getTagColor'
import { withTranslation } from 'locale/i18n'
import { useQuery } from 'react-query'
import Tasks from 'services/Api/endpoints/Tasks'
import { isError } from '@utils/isError'
import { toast } from 'react-toastify'

interface IProps {
  t: (text: string) => string
}

const TasksList: React.FC<IProps> = ({ t }) => {
  const { isLoading, error, data } = useQuery('tasks', () =>
    new Tasks().get().then((res) => res.data)
  )

  if (isError(error)) toast.error(error.message)

  return (
    <>
      {isLoading && <Spin />}
      {data && (
        <Table dataSource={data} rowKey="id">
          <Column title={t('name')} dataIndex="name" key="name" />
          <Column
            title={t('description')}
            dataIndex="description"
            key="description"
          />
          <Column title={t('project')} dataIndex="projectId" key="projectId" />
          <Column
            title={t('state')}
            dataIndex="state"
            key="state"
            render={(state) => (
              <Tag color={getTagColor(state)} key={state}>
                {t(state)}
              </Tag>
            )}
          />
        </Table>
      )}
    </>
  )
}
export default withTranslation('common')(TasksList)
