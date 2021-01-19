import Head from 'components/Head'
import UsersApi from 'services/Api/Users'
import UsersList from '@components/Users/UsersList'
import { GetStaticProps } from 'next'
import { IUsers } from 'types/IUsers'
import { Typography } from 'antd'

const { Title } = Typography

interface IProps {
  users: IUsers
}

const Users: React.FC<IProps> = ({ users }) => (
  <>
    <Head title="Users" />
    <Title>Users</Title>
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
