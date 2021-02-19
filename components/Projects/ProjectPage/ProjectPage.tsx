import Head from '@components/Head'
import { Spin } from 'antd'
import Title from 'antd/lib/typography/Title'
import { isError, useQuery } from 'react-query'
import { toast } from 'react-toastify'
import Projects from 'services/Api/endpoints/Projects'

export interface ProjectPageProps {
  id: number
}

const ProjectPage: React.FunctionComponent<ProjectPageProps> = ({ id }) => {
  const { isLoading, error, data } = useQuery('project', () =>
    new Projects().getById(id).then((res) => res.data)
  )

  if (isError(error)) toast.error(error.message)

  return (
    <>
      {isLoading && <Spin />}
      {data && (
        <>
          <Head title={data.name} />
        </>
      )}
    </>
  )
}

export default ProjectPage
