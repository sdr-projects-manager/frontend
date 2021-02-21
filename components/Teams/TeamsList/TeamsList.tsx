import Column from 'antd/lib/table/Column'
import { Table, Spin } from 'antd'
import { isError, useQuery } from 'react-query'
import { toast } from 'react-toastify'
import { withTranslation } from 'locale/i18n'
import Teams from 'services/Api/endpoints/Teams'
import { TeamsQuery } from 'types/IQuries'

interface ITeamsList {
  t: (text: string) => string
}

const TeamsList: React.FC<ITeamsList> = ({ t }) => {
  const { isLoading, error, data } = useQuery(TeamsQuery, () =>
    new Teams().get().then((res) => res.data)
  )

  if (isError(error)) toast.error(t(error.message))

  return (
    <>
      {isLoading && <Spin />}
      {data && (
        <Table dataSource={data} rowKey="id">
          <Column title={t('name')} dataIndex="name" key="name" />
          <Column
            title={t('Max people')}
            dataIndex="maxPeople"
            key="maxPeople"
          />
        </Table>
      )}
    </>
  )
}

export default withTranslation('common')(TeamsList)
