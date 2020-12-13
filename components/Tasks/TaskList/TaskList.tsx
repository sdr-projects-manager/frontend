import { Table, Tag } from 'antd'
import Column from 'antd/lib/table/Column'
import { getTagColor } from '@utils/getTagColor'
import { getPriorityColor } from '@utils/getPriorityColor'
import Link from 'next/link'
import { getPriority } from 'os'

const TasksList = () => {
  const data = [
    {
      key: '1',
      name: 'Task 1',
      state: 'close',
      project: {
        name: 'Sample project 1',
        link: '/projects/1'
      },
      priority: 'medium'
    },
    {
      key: '2',
      name: 'Task 2',
      state: 'open',
      project: {
        name: 'Sample project 2',
        link: '/projects/1'
      },
      priority: 'low'
    },
    {
      key: '3',
      name: 'Task 2',
      state: 'open',
      project: {
        name: 'Sample project 2',
        link: '/projects/1'
      },
      priority: 'low'
    }
  ]

  return (
    <Table dataSource={data}>
      <Column title="Name" dataIndex="name" key="name" />
      <Column
        title="Project"
        dataIndex="project"
        key="project"
        render={(project) => <Link href={project.link}>{project.name}</Link>}
      />
      <Column
        title="State"
        dataIndex="state"
        key="state"
        render={(state) => (
          <Tag color={getTagColor(state)} key={state}>
            {state}
          </Tag>
        )}
      />
      <Column
        title="Priority"
        dataIndex="priority"
        key="priority"
        render={(priority) => (
          <Tag color={getPriorityColor(priority)} key={priority}>
            {priority}
          </Tag>
        )}
      />
    </Table>
  )
}
export default TasksList
