import { Form, Input, Select, Button, InputNumber } from 'antd'

const TaskForm = () => {
  const { TextArea } = Input
  const { Option } = Select

  return (
    <Form
      style={{
        maxWidth: '40rem'
      }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <TextArea />
      </Form.Item>
      <Form.Item
        label="Cost($)"
        name="cost"
        rules={[{ required: true, message: 'Please input cost' }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Priority"
        name="priority"
        rules={[{ required: true, message: 'Please select priority' }]}
      >
        <Select defaultValue="low">
          <Option value="low">Low</Option>
          <Option value="medium">Medium</Option>
          <Option value="heigh">Heigh</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default TaskForm
