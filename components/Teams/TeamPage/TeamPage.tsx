import Head from '@components/Head'
import { Spin } from 'antd'
import { isError, useQuery } from 'react-query'
import { toast } from 'react-toastify'
import Teams from 'services/Api/endpoints/Teams'
import Users from 'services/Api/endpoints/Users'
import { UsersQuery } from 'types/IQuries'

export interface TeamPageProps {
  id: number
  t: (text: string) => string
}

const TeamPage: React.FunctionComponent<TeamPageProps> = ({ id, t }) => {
  const { isLoading, error, data } = useQuery('team', () =>
    new Teams().getById(id).then((res) => res.data)
  )

  const users = useQuery(UsersQuery, () =>
    new Users().get().then((res) => res.data)
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
