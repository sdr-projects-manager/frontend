import { Form, Input, Select, Button, InputNumber } from 'antd'
import { withTranslation } from 'locale/i18n'
import { useMutation, useQueryClient } from 'react-query'
import Tasks from 'services/Api/endpoints/Tasks'
import { ITask } from 'types/ITasks'

interface IProps {
  t: (text: string) => string
  submitHandler?: () => void
  initialValues?: Partial<ITask>
  setOpen?: (isOpen: boolean) => void
  setFetch?: (isFetch: boolean) => void
}

const TaskForm: React.FC<IProps> = ({ t, setOpen, initialValues }) => {
  const { TextArea } = Input
  const { Option } = Select

  const queryClient = useQueryClient()
  const [form] = Form.useForm()

  const { mutate, isLoading } = useMutation(
    (newProject: Partial<ITask>) => new Tasks().add(newProject),
    {
      onSuccess: (data) => {
        queryClient.setQueryData('tasks', (prev: any) => [...prev, data.data])
        if (setOpen) {
          setOpen(false)
          form.resetFields()
        }
      }
    }
  )

  return (
    <Form
      onFinish={({ name, description, cost, projectId }) => {
        mutate({
          name,
          description,
          cost,
          projectId
        })
      }}
      initialValues={initialValues}
      style={{
        maxWidth: '40rem'
      }}
      form={form}
    >
      <Form.Item
        label={t('Name')}
        name="name"
        rules={[{ required: true, message: t('Please input name') }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label={t('description')} name="description">
        <TextArea />
      </Form.Item>
      <Form.Item
        label={`${t('Cost')}($)`}
        name="cost"
        rules={[{ required: true, message: t('Please input cost') }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label={t('priority')}
        name="priority"
        rules={[{ required: true, message: t('Please select priority') }]}
      >
        <Select>
          <Option value="low">{t('low')}</Option>
          <Option value="medium">{t('medium')}</Option>
          <Option value="heigh">{t('height')}</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label={t('Status')}
        name="state"
        rules={[{ required: true, message: t('Please select status') }]}
      >
        <Select>
          <Option value="new">{t('New')}</Option>
          <Option value="in_progress">{t('In progress')}</Option>
          <Option value="closed">{t('Closed')}</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label={t('Project')}
        name="projectId"
        rules={[{ required: true, message: t('Please select project') }]}
      >
        <Select>
          <Option value="192">{t('192')}</Option>
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

export default withTranslation('common')(TaskForm)
