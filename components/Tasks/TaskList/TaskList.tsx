import { Table, Tag } from 'antd'
import Column from 'antd/lib/table/Column'
import { getTagColor } from '@utils/getTagColor'
import { getPriorityColor } from '@utils/getPriorityColor'
import Link from 'next/link'

const TasksList = () => {
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
      <Column title="Name" dataIndex="name" key="name" />
      <Column
        title="Project"
        dataIndex="project"
        key="project"
        render={(project) => (
          <Link href={`/projects/${project.id}`}>{project.name}</Link>
        )}
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
      <Column
        title="Date"
        dataIndex="date"
        key="date"
        render={(date) => date}
      />
    </Table>
  )
}
export default TasksList
