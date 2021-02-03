import { Form, Input, Button } from 'antd'
import { MailTwoTone, LockTwoTone } from '@ant-design/icons'
import { setToken } from '@store/slices/userSlice'
import { useDispatch } from 'react-redux'
import { withTranslation } from 'locale/i18n'

interface ILoginProps {
  t: (text: string) => string
}

const Login: React.FunctionComponent<ILoginProps> = ({ t }) => {
  const dispatch = useDispatch()

  return (
    <Form
      onFinish={() => {
        dispatch(setToken('test'))
      }}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: t('Please input your email') }]}
      >
        <Input
          placeholder={t('email')}
          autoComplete="email"
          type="email"
          prefix={<MailTwoTone />}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: t('Please input your password') }]}
      >
        <Input.Password placeholder={t('password')} prefix={<LockTwoTone />} />
      </Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        style={{
          display: 'block',
          margin: '0 auto'
        }}
      >
        {t('Sign in')}
      </Button>
    </Form>
  )
}

export default withTranslation('common')(Login)
