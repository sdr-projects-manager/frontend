import Head from '@components/Head'
import { Spin, Table, Tag } from 'antd'
import { isError, useQuery } from 'react-query'
import { toast } from 'react-toastify'
import Teams from 'services/Api/endpoints/Teams'
import Users from 'services/Api/endpoints/Users'
import { TEAM_MEMBERS } from 'types/IQuries'
import { withTranslation } from 'locale/i18n'
import Column from 'antd/lib/table/Column'
import Link from 'next/link'
import { getRoleColor } from '@utils/getRoleColor'
import { IRole } from 'types/IRoles'

export interface TeamPageProps {
  id: number
  t: (text: string) => string
}

const TeamPage: React.FunctionComponent<TeamPageProps> = ({ t, id }) => {
  const { isLoading, error, data } = useQuery('team', () =>
    new Teams().getById(id).then((res) => res.data)
  )

  const members = useQuery(TEAM_MEMBERS, () =>
    new Teams().getMembers(id).then((res) => res.data)
  )

  if (isError(error)) toast.error(t(error.message))

  return (
    <>
      {isLoading && <Spin />}
      {data && (
        <>
          <Head title={data.name} />
          {members.isLoading && <Spin />}
          {members?.data?.instance && members?.data?.instance.length > 0 && (
            <div>
              <h2>{t('Team squad')}</h2>
              <Table rowKey="id" dataSource={members.data.instance}>
                <Column title={t('Name')} dataIndex="name" key="name" />
                <Column
                  title={t('Surname')}
                  dataIndex="lastName"
                  key="lastName"
                />
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
                  render={(userId: number) => (
                    <Link key={userId} href={`/users/${userId}`}>
                      Link
                    </Link>
                  )}
                />
              </Table>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default withTranslation('common')(TeamPage)
