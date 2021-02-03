import Head from 'components/Head'
import UsersApi from 'services/Api/endpoints/Users'
import UsersList from '@components/Users/UsersList'
import { GetStaticProps } from 'next'
import { IUsers } from 'types/IUsers'

interface IProps {
  users: IUsers
}

const Users: React.FC<IProps> = ({ users }) => (
  <>
    <Head title="users" />
    {users && <UsersList users={users} />}
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const users = (await new UsersApi().get()).data

  return {
    props: {
      users
    }
  }
}

export default Users
