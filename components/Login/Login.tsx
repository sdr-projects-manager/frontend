import { Form, Input, Button } from 'antd'
import { MailTwoTone, LockTwoTone } from '@ant-design/icons'

const Login: React.FunctionComponent = () => (
  <>
    <Form
      onFinish={() => {
        // TODO: send request to sign
      }}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input
          placeholder="email"
          autoComplete="email"
          type="email"
          prefix={<MailTwoTone />}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="password" prefix={<LockTwoTone />} />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Sign in
      </Button>
    </Form>
  </>
)

export default Login
