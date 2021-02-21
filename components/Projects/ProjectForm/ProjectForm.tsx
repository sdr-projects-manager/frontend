import { getFormatedStatus } from '@utils/getFormatedStatus'
import { Form, Button, Input, Select, InputNumber } from 'antd'
import { withTranslation } from 'locale/i18n'
import { useEffect } from 'react'
import { isError, useMutation, useQuery, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import Projects from 'services/Api/endpoints/Projects'
import Teams from 'services/Api/endpoints/Teams'
import { IProject } from 'types/IProjects'
import { ProjectsQuery, TeamsQuery } from 'types/IQuries'

const { Option } = Select

interface IProps {
  t: (text: string) => string
  submitHandler?: () => void
  initialValues?: IProject
  setOpen?: (isOpen: boolean) => void
  setFetch?: (isFetch: boolean) => void
}

const ProjectForm: React.FunctionComponent<IProps> = ({
  t,
  initialValues,
  setOpen
}) => {
  const queryClient = useQueryClient()
  const [form] = Form.useForm()

  const close = () => {
    if (setOpen) {
      setOpen(false)
      form.resetFields()
    }
  }

  const { mutate, isLoading } = useMutation(
    (newProject: Partial<IProject>) =>
      initialValues?.id
        ? new Projects().edit(
            initialValues.id ? initialValues.id : 0,
            newProject
          )
        : new Projects().add(newProject),
    {
      onSuccess: ({ data }: any) => {
        if (initialValues?.id) {
          // TODO: Update cache not refesh
          queryClient.refetchQueries(ProjectsQuery)
          close()
        } else if (data.instance) {
          queryClient.setQueryData(ProjectsQuery, (prev: any) => [
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

  const teams = useQuery(TeamsQuery, () => new Teams().get())

  useEffect(() => {
    form.setFieldsValue(initialValues)
  }, [initialValues])

  return (
    <Form
      form={form}
      initialValues={initialValues}
      onFinish={({ name, limitation, teamId, state }) => {
        mutate({
          name,
          limitation: parseInt(limitation, 10),
          teamId,
          state
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
        <InputNumber min={0} />
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
      <Button type="primary" htmlType="submit" loading={isLoading}>
        {t('Submit')}
      </Button>
    </Form>
  )
}
export default withTranslation('common')(ProjectForm)
