import { Form, Button, Input, Select } from 'antd'
import { withTranslation } from 'locale/i18n'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import Projects from 'services/Api/endpoints/Projects'
import Teams from 'services/Api/endpoints/Teams'
import { IProject } from '../../../types/IProjects'

const { Option } = Select

interface IProps {
  t: (text: string) => string
  submitHandler?: () => void
  values?: IProject
  setOpen?: (isOpen: boolean) => void
  setFetch?: (isFetch: boolean) => void
}

const ProjectForm: React.FunctionComponent<IProps> = ({
  t,
  values,
  setOpen
}) => {
  const queryClient = useQueryClient()
  const [form] = Form.useForm()

  const { mutate, isLoading } = useMutation(
    (newProject: Partial<IProject>) => new Projects().add(newProject),
    {
      onSuccess: (data) => {
        queryClient.setQueryData('projects', (prev) => [...prev, data.data])
        if (setOpen) {
          setOpen(false)
          form.resetFields()
        }
      }
    }
  )

  const teams = useQuery('teams', () => new Teams().get())

  return (
    <Form
      form={form}
      initialValues={values}
      onFinish={({ name, limitation, teamId }) => {
        mutate({
          name,
          limitation,
          teamId
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
        label={t('budget limit')}
        name="limitation"
        rules={[{ required: true, message: t('Please input budget limit') }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        label={t('team')}
        name="teamId"
        rules={[{ required: true, message: t('Please select team') }]}
      >
        <Select>
          {teams.data?.data.map((team) => (
            <Option key={team.id} value={team.id}>
              {team.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={isLoading}>
        {t('Submit')}
      </Button>
    </Form>
  )
}
export default withTranslation('common')(ProjectForm)
