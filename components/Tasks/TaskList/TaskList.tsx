import Column from 'antd/lib/table/Column'
import Link from 'next/link'
import { Table, Tag } from 'antd'
import { getPriorityColor } from '@utils/getPriorityColor'
import { getTagColor } from '@utils/getTagColor'
import { withTranslation } from 'locale/i18n'

interface IProps {
  t: (text: string) => string
}

const TasksList: React.FC<IProps> = ({ t }) => {
  const data = [
    {
      key: '1',
      name: 'Task 1',
      state: 'close',
      project: {
        name: 'Sample project 1',
        id: '1'
      },
      priority: 'medium',
      date: '2020-02-10'
    },
    {
      key: '2',
      name: 'Task 2',
      state: 'open',
      project: {
        name: 'Sample project 2',
        id: '1'
      },
      priority: 'low',
      date: '2020-03-02'
    },
    {
      key: '3',
      name: 'Task 2',
      state: 'open',
      project: {
        name: 'Sample project 2',
        id: '1'
      },
      priority: 'low',
      date: '2020-05-10'
    }
  ]

  return (
    <Table dataSource={data}>
      <Column title={t('name')} dataIndex="name" key="name" />
      <Column
        title={t('project')}
        dataIndex="project"
        key="project"
        render={(project) => (
          <Link href={`/projects/${project.id}`}>{project.name}</Link>
        )}
      />
      <Column
        title={t('state')}
        dataIndex="state"
        key="state"
        render={(state) => (
          <Tag color={getTagColor(state)} key={state}>
            {t(state)}
          </Tag>
        )}
      />
      <Column
        title={t('priority')}
        dataIndex="priority"
        key="priority"
        render={(priority) => (
          <Tag color={getPriorityColor(priority)} key={priority}>
            {t(priority)}
          </Tag>
        )}
      />
      <Column
        title={t('date')}
        dataIndex="date"
        key="date"
        render={(date) => date}
      />
    </Table>
  )
}
export default withTranslation('common')(TasksList)
