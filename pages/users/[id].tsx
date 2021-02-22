import Head from '@components/Head'
import UserDetails from '@components/UserDetails'
import { useQuery } from 'react-query'
import CurrentUser from 'services/Api/endpoints/CurrentUser'
import { CurrentUserQuery } from 'types/IQuries'

const User: React.FC = () => {
  const user = useQuery(CurrentUserQuery, () =>
    new CurrentUser().get().then((res) => res.data)
  )

  return (
    <>
      <Head title="User" />
      <UserDetails user={user} />
    </>
  )
}

export default User
