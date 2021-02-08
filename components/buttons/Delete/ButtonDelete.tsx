import { useState } from 'react'
import { Button, Popconfirm } from 'antd'
import { withTranslation } from 'next-i18next'
import { PopconfirmProps } from 'antd/lib/popconfirm'
import { QuestionCircleOutlined } from '@ant-design/icons'

interface IProps {
  buttonTitle?: string
  popconfirm?: Partial<PopconfirmProps>
  confirmCb: (closeHandler: () => void) => void
  t: (text: string) => string
}

const ButtonDelete: React.FC<IProps> = ({
  t,
  buttonTitle,
  popconfirm,
  confirmCb
}) => {
  const [isVisible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const closeHandler = () => {
    setVisible(false)
    setConfirmLoading(false)
  }

  return (
    <Popconfirm
      title={popconfirm?.title || t('Are you shure?')}
      cancelText={popconfirm?.cancelText || 'Anuluj'}
      okText={t((popconfirm?.cancelText as string) || 'Delete')}
      icon={<QuestionCircleOutlined />}
      onConfirm={() => {
        setConfirmLoading(true)
        confirmCb(closeHandler)
      }}
      okButtonProps={{
        type: 'primary',
        loading: confirmLoading
      }}
      cancelButtonProps={{
        danger: true
      }}
      visible={isVisible}
      onCancel={() => setVisible(false)}
    >
      <Button danger type="link" onClick={() => setVisible(true)}>
        {t(buttonTitle || 'Delete')}
      </Button>
    </Popconfirm>
  )
}

export default withTranslation('common')(ButtonDelete)
