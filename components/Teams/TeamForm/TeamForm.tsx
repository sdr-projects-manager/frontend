import { isError } from '@utils/isError'
import { Form, Input, Select, Button, InputNumber } from 'antd'
import { withTranslation } from 'locale/i18n'
import { useEffect } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import Teams from 'services/Api/endpoints/Teams'
import Users from 'services/Api/endpoints/Users'
import { TeamsQuery, TEAM_MEMBERS, UsersQuery } from 'types/IQuries'
import { ITask } from 'types/ITasks'
import { ITeam } from 'types/ITeams'
import { IUser } from 'types/IUsers'

interface IProps {
  t: (text: string) => string
  submitHandler?: () => void
  initialValues?: Partial<ITask> | any
  setOpen?: (isOpen: boolean) => void
  setFetch?: (isFetch: boolean) => void
}

const TeamForm: React.FC<IProps> = ({ t, setOpen, initialValues }) => {
  const { Option } = Select

  const queryClient = useQueryClient()
  const [form] = Form.useForm()

  const close = () => {
    if (setOpen) {
      setOpen(false)
      form.resetFields()
    }
  }

  const { mutate, isLoading } = useMutation(
    (newTeam: Partial<ITeam>) =>
      initialValues?.id
        ? new Teams().edit(initialValues.id ? initialValues.id : 0, newTeam)
        : new Teams().add(newTeam),
    {
      onSuccess: ({ data }: any) => {
        if (initialValues?.id) {
          // TODO: Update cache not refesh
          queryClient.refetchQueries(TeamsQuery)
          close()
        } else if (data.instance) {
          queryClient.setQueryData(TeamsQuery, (prev: any) => [
            ...prev,
            data.instance
          ])
          close()
        } else {
          toast.warn(t(data.message))
        }
      },
      onError: (error) => {
        if (isError(error)) {
          toast.error(t(error.message))
        }
      }
    }
  )

  const availableUsers = useQuery(UsersQuery, () =>
    new Users().get().then((res) => res.data)
  )

  useEffect(() => {
    form.setFieldsValue(initialValues)
  }, [initialValues])

  return (
    <Form
      onFinish={({ name, maxPeople, users }) => {
        mutate({
          name,
          maxPeople: parseInt(maxPeople, 10),
          users
        })
      }}
      initialValues={initialValues}
      style={{
        maxWidth: '40rem'
      }}
      form={form}
    >
      <Form.Item
        label={t('name')}
        name="name"
        rules={[{ required: true, message: t('Please input name') }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('Max people')}
        name="maxPeople"
        rules={[{ required: true, message: t('Please input max poeple') }]}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item
        label={t('Users')}
        name="users"
        rules={[{ required: true, message: t('Please input name') }]}
      >
        <Select
          mode="multiple"
          placeholder={t('Select users')}
          loading={availableUsers.isLoading}
        >
          {availableUsers.data &&
            availableUsers.data.map((user: IUser) => (
              <Option key={user.id} value={user.id}>
                {user.name}
              </Option>
            ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          {t('Submit')}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default withTranslation('common')(TeamForm)
