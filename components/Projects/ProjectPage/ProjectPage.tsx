import Head from '@components/Head'
import Projects from 'services/Api/endpoints/Projects'
import { Spin } from 'antd'
import { isError, useQuery } from 'react-query'
import { toast } from 'react-toastify'
import { withTranslation } from 'locale/i18n'

export interface ProjectPageProps {
  id: number
  t: (text: string) => string
}

const ProjectPage: React.FunctionComponent<ProjectPageProps> = ({ t, id }) => {
  const { isLoading, error, data } = useQuery('project', () =>
    new Projects().getById(id).then((res) => res.data)
  )

  if (isError(error)) toast.error(t(error.message))

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

export default withTranslation('common')(ProjectPage)
