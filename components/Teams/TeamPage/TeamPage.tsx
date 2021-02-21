import Head from '@components/Head'
import { Spin } from 'antd'
import { isError, useQuery } from 'react-query'
import { toast } from 'react-toastify'
import Teams from 'services/Api/endpoints/Teams'

export interface TeamPageProps {
  id: number
}

const TeamPage: React.FunctionComponent<TeamPageProps> = ({ id }) => {
  const { isLoading, error, data } = useQuery('team', () =>
    new Teams().getById(id).then((res) => res.data)
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

export default TeamPage
