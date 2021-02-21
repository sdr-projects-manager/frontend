import { getFormatedPrice } from '@utils/getFormatedPrice'
import { Spin, Table } from 'antd'
import Column from 'antd/lib/table/Column'
import { withTranslation } from 'locale/i18n'
import Link from 'next/link'
import { isError, useQuery } from 'react-query'
import { toast } from 'react-toastify'
import Raports from 'services/Api/endpoints/Raports'
import { RaportsQuery } from 'types/IQuries'
import { IRaport } from 'types/IRaports'

export interface RaportsListProps {
  t: (text: string) => string
}

const RaportsList: React.FunctionComponent<RaportsListProps> = ({ t }) => {
  const { isLoading, error, data } = useQuery(RaportsQuery, () =>
    new Raports().get().then((res) => res.data)
  )

  if (isError(error)) toast.error(t(error.message))

  return (
    <>
      {isLoading && <Spin />}
      {data && (
        <Table dataSource={data} rowKey="id">
          <Column
            title={t('Project')}
            dataIndex="project"
            key="project"
            render={(project) => (
              <Link href={`/projects/${project.id}`}>{project.name}</Link>
            )}
          />
          <Column
            title={t('Team')}
            dataIndex="team"
            key="team"
            render={(team) => (
              <Link href={`/teams/${team.id}`}>{team.name}</Link>
            )}
          />
          <Column
            title={t('Budget')}
            dataIndex="budget"
            key="budget"
            render={(_, values: IRaport) =>
              getFormatedPrice(values.project.budget.limitation)
            }
          />
          <Column
            title={t('Costs')}
            dataIndex="costs"
            key="costs"
            render={(cost) => getFormatedPrice(cost)}
          />
          <Column
            title={t('Profitability')}
            dataIndex="profitability"
            key="profitability"
            render={(profitability) => getFormatedPrice(profitability)}
          />
        </Table>
      )}
    </>
  )
}

export default withTranslation('common')(RaportsList)
