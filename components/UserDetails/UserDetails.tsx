import Column from 'antd/lib/table/Column'
import CurrentUser from 'services/Api/endpoints/CurrentUser'
import { Spin, Table, Tag } from 'antd'
import { useQuery } from 'react-query'
import { withTranslation } from 'locale/i18n'
import { getRoleColor } from '@utils/getRoleColor'
import { IRole } from 'types/IRoles'
import { CurrentUserQuery } from 'types/IQuries'

interface IProps {
  t: (text: string) => string
}

const Profile: React.FC<IProps> = ({ t }) => {
  const { isLoading, data } = useQuery(CurrentUserQuery, () =>
    new CurrentUser().get().then((res) => res.data)
  )

  return (
    <>
      {isLoading && <Spin />}
      {data && (
        <Table dataSource={[data]} pagination={false} rowKey="id">
          <Column title={t('Login')} dataIndex="login" key="login" />
          <Column title={t('Name')} dataIndex="name" key="name" />
          <Column title={t('Surname')} dataIndex="lastName" key="lastName" />
          <Column
            title={t('Email')}
            dataIndex="email"
            key="email"
            render={() => <a href={`mailto:${data.email}`}>{data.email}</a>}
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
}

export default withTranslation('common')(Profile)
