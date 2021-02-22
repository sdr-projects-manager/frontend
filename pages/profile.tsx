import Head from '@components/Head'
import UserDetails from '@components/UserDetails'
import CurrentUser from 'services/Api/endpoints/CurrentUser'
import { CurrentUserQuery } from 'types/IQuries'
import { useQuery } from 'react-query'

const Profile: React.FC = () => {
  const user = useQuery(CurrentUserQuery, () =>
    new CurrentUser().get().then((res) => res.data)
  )

  return (
    <>
      <Head title="Profile" />
      <UserDetails user={user} />
    </>
  )
}

export default Profile
