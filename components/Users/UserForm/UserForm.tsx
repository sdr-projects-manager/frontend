import { IUser } from 'types/IUsers'
import { Form, Button, Input, Select } from 'antd'
import { withTranslation } from 'locale/i18n'
import { useMutation, useQueryClient } from 'react-query'
import Users from 'services/Api/endpoints/Users'
import { IProject } from 'types/IProjects'

const { Option } = Select

interface IProps {
  t: (text: string) => string
  submitHandler?: () => void
  values?: IProject
  setOpen?: (isOpen: boolean) => void
  setFetch?: (isFetch: boolean) => void
}

const UserForm: React.FunctionComponent<IProps> = ({ t, values, setOpen }) => {
  const queryClient = useQueryClient()
  const [form] = Form.useForm()

  const { mutate, isLoading } = useMutation(
    (newUser: Partial<IUser>) => new Users().add(newUser),
    {
      onSuccess: (data) => {
        queryClient.setQueryData('users', (prev: any) => [...prev, data.data])
        if (setOpen) {
          setOpen(false)
          form.resetFields()
        }
      }
    }
  )

  return (
    <Form
      form={form}
      initialValues={values}
      onFinish={({ name, email, password }) => {
        mutate({
          name,
          email,
          password
        })
      }}
    >
      <Form.Item
        label={t('name')}
        name="name"
        rules={[{ required: true, message: t('Please input name') }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('email')}
        name="email"
        rules={[{ required: true, message: t('Please input email') }]}
      >
        <Input type="email" />
      </Form.Item>
      <Form.Item
        label={t('login')}
        name="login"
        rules={[{ required: true, message: t('Please input login') }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('password')}
        name="password"
        rules={[{ required: true, message: t('Please input password') }]}
      >
        <Input type="password" />
      </Form.Item>
      <Form.Item
        label={t('role')}
        name="roleId"
        rules={[{ required: true, message: t('Please select role') }]}
      >
        <Select>
          <Option value="4">User</Option>
        </Select>
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={isLoading}>
        {t('Submit')}
      </Button>
    </Form>
  )
}
export default withTranslation('common')(UserForm)
