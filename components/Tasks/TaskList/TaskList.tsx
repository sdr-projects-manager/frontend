import { Table, Tag } from 'antd'
import Column from 'antd/lib/table/Column'
import { getTagColor } from '@utils/getTagColor'
import Link from 'next/link'

const TasksList = () => {
  const data = [
    {
      key: '1',
      name: 'Task 1',
      state: 'close',
      project: {
        name: 'Sample project 1',
        link: '/projects/1'
      }
    },
    {
      key: '2',
      name: 'Task 2',
      state: 'open',
      project: {
        name: 'Sample project 2',
        link: '/projects/1'
      }
    },
    {
      key: '3',
      name: 'Task 2',
      state: 'open',
      project: {
        name: 'Sample project 2',
        link: '/projects/1'
      }
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
    </Table>
  )
}
export default TasksList
