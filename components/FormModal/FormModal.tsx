import Modal from 'antd/lib/modal/Modal'
import { Button } from 'antd'
import { PlusCircleFilled, EditFilled } from '@ant-design/icons'
import { cloneElement, useState } from 'react'
import { withTranslation } from 'locale/i18n'

interface IProps {
  t: (text: string) => string
  FormComponent: any
  type: 'add' | 'edit'
}

const FormModal: React.FC<IProps> = ({ t, FormComponent, type }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Button
        type={type === 'add' ? 'primary' : 'link'}
        icon={type === 'add' ? <PlusCircleFilled /> : <EditFilled />}
        onClick={() => setOpen(true)}
      >
        {type === 'add' ? t('Add') : t('Edit')}
      </Button>
      <Modal
        title={type === 'add' ? t('Add') : t('Edit')}
        visible={isOpen}
        onCancel={() => setOpen(false)}
        footer={<></>}
      >
        {cloneElement(FormComponent, {
          setOpen
        })}
      </Modal>
    </>
  )
}

export default withTranslation('common')(FormModal)
