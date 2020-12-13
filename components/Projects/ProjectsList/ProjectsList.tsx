import { Table, Tag } from 'antd'
import Column from 'antd/lib/table/Column'
import { getTagColor } from '@utils/getTagColor'
import Link from 'next/link'

const ProjectsList = () => {
  const data = [
    {
      key: '1',
      name: 'Sample project 1',
      state: 'close',
      team: {
        name: 'Sample team 1',
        link: '/teams/1'
      }
    },
    {
      key: '2',
      name: 'Sample project 2',
      state: 'open',
      team: {
        name: 'Sample team 2',
        link: '/teams/1'
      }
    }
  ]

  return (
    <Table dataSource={data}>
      <Column title="Name" dataIndex="name" key="name" />
      <Column
        title="Team"
        dataIndex="team"
        key="team"
        render={(team) => <Link href={team.link}>{team.name}</Link>}
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
export default ProjectsList
