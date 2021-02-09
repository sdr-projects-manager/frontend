import Head from 'components/Head'
import UsersList from '@components/Users/UsersList'
import { IUsers } from 'types/IUsers'
import FormModal from '@components/FormModal'
import UserForm from '@components/Users/UserForm'

interface IProps {
  users: IUsers
}

const Users: React.FC<IProps> = () => (
  <>
    <Head title="users" />
    <FormModal FormComponent={<UserForm />} type="add" />
    <UsersList />
  </>
)
export default Users
