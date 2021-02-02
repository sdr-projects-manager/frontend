import { Form, Input, Select, Button, InputNumber } from 'antd'
import { withTranslation } from 'locale/i18n'

interface IProps {
  t: (text: string) => string
}

const TaskForm: React.FC<IProps> = ({ t }) => {
  const { TextArea } = Input
  const { Option } = Select

  return (
    <Form
      initialValues={{
        priority: 'low'
      }}
      style={{
        maxWidth: '40rem'
      }}
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
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {t('Submit')}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default withTranslation('common')(TaskForm)
