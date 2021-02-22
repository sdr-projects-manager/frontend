import Column from 'antd/lib/table/Column'
import { Spin, Table, Tag } from 'antd'
import { withTranslation } from 'locale/i18n'
import { getRoleColor } from '@utils/getRoleColor'
import { IRole } from 'types/IRoles'
import { IUser } from 'types/IUsers'
import { QueryObserverResult } from 'react-query'

interface IProps {
  t: (text: string) => string
  user: QueryObserverResult<IUser, unknown>
}

const Profile: React.FC<IProps> = ({ t, user }) => (
  <>
    {user.isLoading && <Spin />}
    {user.data && (
      <Table dataSource={[user.data]} pagination={false} rowKey="id">
        <Column title={t('Login')} dataIndex="login" key="login" />
        <Column title={t('Name')} dataIndex="name" key="name" />
        <Column title={t('Surname')} dataIndex="lastName" key="lastName" />
        <Column
          title={t('Email')}
          dataIndex="email"
          key="email"
          render={() => (
            <a href={`mailto:${user.data.email}`}>{user.data.email}</a>
          )}
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
      </Table>
    )}
  </>
)

export default withTranslation('common')(Profile)
