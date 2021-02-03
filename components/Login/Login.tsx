import { Form, Input, Button } from 'antd'
import { MailTwoTone, LockTwoTone } from '@ant-design/icons'
import { setToken } from '@store/slices/authorisationSlice'
import { useDispatch } from 'react-redux'
import { withTranslation } from 'locale/i18n'
import Auth from 'services/Api/endpoints/Auth'
import { toast } from 'react-toastify'

interface ILoginProps {
  t: (text: string) => string
}

const Login: React.FunctionComponent<ILoginProps> = ({ t }) => {
  const dispatch = useDispatch()

  return (
    <Form
      onFinish={(formData) => {
        const { login, password } = formData
        new Auth()
          .signIn(login, password)
          .then(({ data }) => {
            const { token } = data
            dispatch(setToken({ token }))
            toast.success(t('You have been logged in'))
          })
          .catch((error) => toast.error(t(error.message)))
      }}
    >
      <Form.Item
        name="login"
        rules={[{ required: true, message: t('Please input your login') }]}
      >
        <Input
          placeholder={t('login')}
          autoComplete=""
          type="text"
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
