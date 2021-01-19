import Column from 'antd/lib/table/Column'
import Link from 'next/link'
import { Table } from 'antd'
import { IUsers } from 'types/IUsers'

interface IProps {
  users: IUsers
}

const ProjectsList: React.FC<IProps> = ({ users }) => (
  <Table rowKey="id" dataSource={users}>
    <Column title="Name" dataIndex="name" key="name" />
    <Column title="Surname" dataIndex="lastName" key="lastName" />
    <Column title="Email" dataIndex="email" key="email" />
    <Column
      title="Profile"
      dataIndex="id"
      key="profile"
      render={(id) => (
        <Link key={id} href={`/users/${id}`}>
          Link
        </Link>
      )}
    />
  </Table>
)
export default ProjectsList
