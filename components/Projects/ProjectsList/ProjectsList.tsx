import { Table, Tag } from 'antd'
import Column from 'antd/lib/table/Column'
import { getTagColor } from '@utils/getTagColor'

const ProjectsList = () => {
  const data = [
    {
      key: '1',
      name: 'Sample project 1',
      state: 'close'
    },
    {
      key: '2',
      name: 'Sample project 2',
      state: 'open'
    }
  ]

  return (
    <Table dataSource={data}>
      <Column title="Name" dataIndex="name" key="name" />
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
