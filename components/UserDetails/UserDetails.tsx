import Column from 'antd/lib/table/Column'
import CurrentUser from 'services/Api/endpoints/CurrentUser'
import { Spin, Table, Tag } from 'antd'
import { useQuery } from 'react-query'
import { withTranslation } from 'locale/i18n'
import { getRoleColor } from '@utils/getRoleColor'
import { IRole } from 'types/IRoles'

interface IProps {
  t: (text: string) => string
}

const Profile: React.FC<IProps> = ({ t }) => {
  const { isLoading, data } = useQuery('currentUser', () =>
    new CurrentUser().get().then((res) => res.data)
  )

  return (
    <>
      {isLoading && <Spin />}
      {data && (
        <Table dataSource={[data]} pagination={false}>
          <Column title={t('Name')} dataIndex="username" key="username" />
          <Column
            title={t('Email')}
            dataIndex="email"
            key="email"
            render={() => <a href={`mailto:${data.email}`}>{data.email}</a>}
          />
          <Column
            title={t('Roles')}
            dataIndex="authorities"
            key="authorities"
            render={(values) =>
              values.map((val: { authority: string }) => {
                const role = val.authority.replace('ROLE_', '') as IRole

                return (
                  <Tag key={role} color={getRoleColor(role)}>
                    {role}
                  </Tag>
                )
              })
            }
          />
        </Table>
      )}
    </>
  )
}

export default withTranslation('common')(Profile)
