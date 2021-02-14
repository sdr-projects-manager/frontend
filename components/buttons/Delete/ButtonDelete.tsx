import { useState } from 'react'
import { Button, Popconfirm } from 'antd'
import { withTranslation } from 'next-i18next'
import { PopconfirmProps } from 'antd/lib/popconfirm'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { useMutation, useQueryClient } from 'react-query'
import { AxiosResponse } from 'axios'

interface IProps {
  buttonTitle?: string
  popconfirm?: Partial<PopconfirmProps>
  t: (text: string) => string
  deleteMethod: () => Promise<AxiosResponse<any>>
  queryKey: string
}

const ButtonDelete: React.FC<IProps> = ({
  t,
  buttonTitle,
  popconfirm,
  deleteMethod,
  queryKey
}) => {
  const [isVisible, setVisible] = useState(false)
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(() => deleteMethod(), {
    onSuccess: (data) => {
      const list = queryClient.getQueryData(queryKey) as Array<any>
      const item = list.find((l) => l.id === data.data.instance.id)
      const updatedList = list.filter((value) => value.id !== item.id)

      queryClient.setQueryData(queryKey, updatedList)
      setVisible(false)
    }
  })

  return (
    <Popconfirm
      title={popconfirm?.title || t('Are you shure?')}
      cancelText={popconfirm?.cancelText || 'Anuluj'}
      okText={t((popconfirm?.cancelText as string) || 'Delete')}
      icon={<QuestionCircleOutlined />}
      onConfirm={() => {
        mutate()
      }}
      okButtonProps={{
        type: 'primary',
        loading: isLoading
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
