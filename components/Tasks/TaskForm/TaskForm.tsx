import { getFormatedStatus } from '@utils/getFormatedStatus'
import { isError } from '@utils/isError'
import { Form, Input, Select, Button, InputNumber } from 'antd'
import { withTranslation } from 'locale/i18n'
import { useEffect } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import Projects from 'services/Api/endpoints/Projects'
import Tasks from 'services/Api/endpoints/Tasks'
import { ProjectsQuery } from 'types/IQuries'
import { ITask } from 'types/ITasks'

interface IProps {
  t: (text: string) => string
  submitHandler?: () => void
  initialValues?: Partial<ITask> | any
  setOpen?: (isOpen: boolean) => void
  setFetch?: (isFetch: boolean) => void
}

const TaskForm: React.FC<IProps> = ({ t, setOpen, initialValues }) => {
  const { TextArea } = Input
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
    (newProject: Partial<ITask>) =>
      initialValues?.id
        ? new Tasks().edit(initialValues.id ? initialValues.id : 0, newProject)
        : new Tasks().add(newProject),
    {
      onSuccess: ({ data }: any) => {
        if (initialValues?.id) {
          // TODO: Update cache not refesh
          queryClient.refetchQueries('tasks')
          close()
        } else if (data.instance) {
          queryClient.setQueryData('tasks', (prev: any) => [...prev, data])
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

  const projects = useQuery(ProjectsQuery, () =>
    new Projects().get().then((res) => res.data)
  )

  useEffect(() => {
    form.setFieldsValue(initialValues)
  }, [initialValues])

  return (
    <Form
      onFinish={({ name, description, cost, state, projectId }) => {
        mutate({
          name,
          description,
          cost,
          state,
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
        label={t('name')}
        name="name"
        rules={[{ required: true, message: t('Please input name') }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label={t('description')} name="description">
        <TextArea />
      </Form.Item>
      <Form.Item
        label={`${t('cost')}($)`}
        name="cost"
        rules={[{ required: true, message: t('Please input cost') }]}
      >
        <InputNumber min={1} />
      </Form.Item>
      <Form.Item
        label={t('status')}
        name="state"
        rules={[{ required: true, message: t('Please select status') }]}
      >
        <Select>
          {[0, 1].map((state: any) => (
            <Option value={state} key={state}>
              {t(getFormatedStatus(state).name)}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label={t('project')}
        name="projectId"
        rules={[{ required: true, message: t('Please select project') }]}
      >
        <Select>
          {projects.data?.map((project) => (
            <Option key={project.id} value={project.id}>
              {project.name}
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

export default withTranslation('common')(TaskForm)
