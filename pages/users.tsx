import Head from 'components/Head'
import UsersList from '@components/Users/UsersList'
import { IUsers } from 'types/IUsers'

interface IProps {
  users: IUsers
}

const Users: React.FC<IProps> = () => (
  <>
    <Head title="users" />
    <UsersList />
  </>
)
export default Users
