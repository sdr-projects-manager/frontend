import ButtonDelete from '@components/buttons/Delete'
import Column from 'antd/lib/table/Column'
import Projects from 'services/Api/endpoints/Projects'
import { Table, Tag, Spin } from 'antd'
import { getTagColor } from '@utils/getTagColor'
import { isError, useQuery } from 'react-query'
import { toast } from 'react-toastify'
import { withTranslation } from 'locale/i18n'
import FormModal from '@components/FormModal'
import ProjectForm from '../ProjectForm'

interface IProjectsList {
  t: (text: string) => string
  projects?: Array<{
    name: string
    status: number
  }>
}

const ProjectsList: React.FC<IProjectsList> = ({ t }) => {
  const { isLoading, error, data } = useQuery('projects', () =>
    new Projects().get().then((res) => res.data)
  )

  if (isError(error)) toast.error(error.message)

  return (
    <>
      <FormModal FormComponent={<ProjectForm />} type="add" />
      <div>
        {isLoading && <Spin />}
        {data && (
          <Table dataSource={data} rowKey="id">
            <Column title={t('Name')} dataIndex="name" key="name" />
            <Column
              title={t('Status')}
              dataIndex="state"
              key="state"
              render={(state) => (
                <Tag color={getTagColor(state)} key={state}>
                  {state}
                </Tag>
              )}
            />
            <Column
              title={t('Team')}
              dataIndex="teamId"
              key="teamId"
              render={(teamId) => teamId}
            />
            <Column
              title={t('Edit')}
              render={(values) => (
                <FormModal
                  FormComponent={<ProjectForm values={values} />}
                  type="edit"
                />
              )}
            />
            <Column
              title={t('Delete')}
              dataIndex="delete"
              key="delete"
              render={() => (
                <ButtonDelete confirmCb={(closeHandler) => closeHandler()} />
              )}
            />
          </Table>
        )}
      </div>
    </>
  )
}

export default withTranslation('common')(ProjectsList)
