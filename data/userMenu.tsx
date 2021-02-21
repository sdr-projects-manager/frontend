import {
  FundProjectionScreenOutlined,
  FileDoneOutlined
} from '@ant-design/icons'

import { i18n } from 'locale/i18n'

export default [
  {
    name: i18n.t('Projects'),
    path: '/projects',
    icon: <FundProjectionScreenOutlined />
  },
  {
    name: i18n.t('Tasks'),
    path: '/tasks',
    icon: <FileDoneOutlined />
  }
]
