import Head from '@components/Head'
import { Typography } from 'antd'
import { withTranslation } from 'locale/i18n'
import { NextPage } from 'next'
import { ReactNode } from 'react'

const { Title } = Typography

interface IHomeProps {
  t: (text: string) => ReactNode
}

const Home: NextPage<IHomeProps> = ({ t }) => (
  <>
    <Head title="SDR Projects Manager" />
    <Title>{t('homepage')}</Title>
  </>
)

export default withTranslation('common')(Home)
