import Column from 'antd/lib/table/Column'
import Link from 'next/link'
import { Spin, Table } from 'antd'
import Users from 'services/Api/endpoints/Users'
import { isError, useQuery } from 'react-query'
import { toast } from 'react-toastify'
import { withTranslation } from 'locale/i18n'

interface IProjectsList {
  t: (text: string) => string
}

const UsersList: React.FC<IProjectsList> = ({ t }) => {
  const { isLoading, error, data } = useQuery('users', () =>
    new Users().get().then((res) => res.data)
  )

  if (isError(error)) toast.error(error.message)

  return (
    <>
      {isLoading && <Spin />}
      {data && (
        <Table rowKey="id" dataSource={data}>
          <Column title={t('Name')} dataIndex="name" key="name" />
          <Column title={t('Surname')} dataIndex="lastName" key="lastName" />
          <Column
            title={t('Email')}
            dataIndex="email"
            key="email"
            render={(email) => <a href={`mailto:${email}`}>{email}</a>}
          />
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
      )}
    </>
  )
}

export default withTranslation('common')(UsersList)
