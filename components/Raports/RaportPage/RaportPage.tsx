import { isError, useQuery } from 'react-query'
import { toast } from 'react-toastify'
import Raports from 'services/Api/endpoints/Raports'
import { withTranslation } from 'locale/i18n'
import { Spin, Table } from 'antd'
import Column from 'antd/lib/table/Column'
import { getFormatedPrice } from '@utils/getFormatedPrice'
import Link from 'next/link'
import { IRaport } from 'types/IRaports'
import {
  Pie,
  PieChart,
  Tooltip,
  Cell,
  LabelList,
  ResponsiveContainer
} from 'recharts'
import randomColor from 'randomcolor'

export interface RaportPageProps {
  t: (text: string) => string
  id: number
}

const RaportPage: React.FunctionComponent<RaportPageProps> = ({ id, t }) => {
  const { isLoading, error, data } = useQuery('raport', () =>
    new Raports().getById(id).then((res) => res.data)
  )

  if (isError(error)) {
    toast.error(t(error.message))
  }

  const tasks = useQuery(`raportTasks:${id}`, () =>
    new Raports().getTasks(id).then((res) => res.data)
  )

  const chartTasks = tasks.data?.map((task) => ({
    name: task.name,
    value: task.cost
  }))

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent
  }: any) => {
    const RADIAN = Math.PI / 180
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <>
      {isLoading && <Spin />}
      {data && (
        <Table dataSource={[data]} rowKey="id">
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
      {tasks && (
        <ResponsiveContainer width="100%" height={window.innerHeight / 2}>
          <PieChart style={{ margin: '0 auto' }}>
            <Pie
              data={chartTasks}
              cx="50%"
              cy="50%"
              fill="#8884d8"
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel}
            >
              {tasks.data?.map((task) => {
                const color = randomColor({
                  format: 'hex'
                })

                return <Cell key={`cell-${task.id}`} fill={color} />
              })}
            </Pie>
            <LabelList dataKey="value" />
            <Tooltip formatter={(value: number) => getFormatedPrice(value)} />
          </PieChart>
        </ResponsiveContainer>
      )}
    </>
  )
}

export default withTranslation('common')(RaportPage)
