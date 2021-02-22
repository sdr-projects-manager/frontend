import Column from 'antd/lib/table/Column'
import Link from 'next/link'
import { Spin, Table, Tag } from 'antd'
import Users from 'services/Api/endpoints/Users'
import { isError, useQuery } from 'react-query'
import { toast } from 'react-toastify'
import { withTranslation } from 'locale/i18n'
import FormModal from '@components/FormModal'
import { UsersQuery } from 'types/IQuries'
import { getRoleColor } from '@utils/getRoleColor'
import { IRole } from 'types/IRoles'
import UserForm from '../UserForm'

interface IProjectsList {
  t: (text: string) => string
}

const UsersList: React.FC<IProjectsList> = ({ t }) => {
  const { isLoading, error, data } = useQuery(UsersQuery, () =>
    new Users().get().then((res) => res.data)
  )

  if (isError(error)) toast.error(t(error.message))

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
            title={t('Role')}
            dataIndex="role"
            key="role"
            render={(value) => {
              if (value) {
                const role = value.name.toUpperCase() as IRole
                return <Tag color={getRoleColor(role)}>{t(role)}</Tag>
              }

              return ''
            }}
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
          <Column
            title={t('Edit')}
            render={(values) => (
              <FormModal
                FormComponent={
                  <UserForm values={{ ...values, roleId: values?.role?.id }} />
                }
                type="edit"
              />
            )}
          />
        </Table>
      )}
    </>
  )
}

export default withTranslation('common')(UsersList)
