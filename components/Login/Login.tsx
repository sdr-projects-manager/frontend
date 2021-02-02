import { Form, Input, Button } from 'antd'
import { MailTwoTone, LockTwoTone } from '@ant-design/icons'
import { setToken } from '@store/slices/userSlice'
import { useDispatch } from 'react-redux'

const Login: React.FunctionComponent = () => {
  const dispatch = useDispatch()

  return (
    <Form
      onFinish={() => {
        // TODO: send request to sign
        dispatch(setToken(''))
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
  )
}

export default Login
