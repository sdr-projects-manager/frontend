import ButtonDelete from '@components/buttons/Delete'
import Column from 'antd/lib/table/Column'
import Projects from 'services/Api/endpoints/Projects'
import { Table, Tag, Spin } from 'antd'
import { isError, useQuery } from 'react-query'
import { toast } from 'react-toastify'
import { withTranslation } from 'locale/i18n'
import FormModal from '@components/FormModal'
import { IProject } from 'types/IProjects'
import { ProjectsQuery } from 'types/IQuries'
import { getFormatedStatus } from '@utils/getFormatedStatus'
import Link from 'next/link'
import ProjectForm from '../ProjectForm'

interface IProjectsList {
  t: (text: string) => string
  projects?: Array<{
    name: string
    status: number
  }>
}

const ProjectsList: React.FC<IProjectsList> = ({ t }) => {
  const { isLoading, error, data } = useQuery(ProjectsQuery, () =>
    new Projects().get().then((res) => res.data)
  )

  if (isError(error)) toast.error(t(error.message))

  return (
    <>
      <FormModal FormComponent={<ProjectForm />} type="add" />
      <div>
        {isLoading && <Spin />}
        {data && (
          <Table dataSource={data} rowKey="id">
            <Column
              title={t('name')}
              dataIndex="name"
              key="name"
              render={(_, values: IProject) => (
                <Link href={`/projects/${values.id}`}>{values.name}</Link>
              )}
            />
            <Column
              title={t('Status')}
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
              title={t('Team')}
              dataIndex="team"
              key="team"
              render={(team) => team.name}
            />
            <Column
              title={t('Edit')}
              render={(Project: IProject) => (
                <FormModal
                  FormComponent={<ProjectForm values={Project} />}
                  type="edit"
                />
              )}
            />
            <Column
              title={t('Delete')}
              dataIndex="delete"
              key="delete"
              render={(_value, { id }: IProject) => (
                <ButtonDelete
                  deleteMethod={() => new Projects().delete(id)}
                  queryKey="projects"
                />
              )}
            />
          </Table>
        )}
      </div>
    </>
  )
}

export default withTranslation('common')(ProjectsList)
