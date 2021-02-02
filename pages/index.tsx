import Head from '@components/Head'
import { withTranslation } from 'locale/i18n'
import { NextPage } from 'next'
import { ReactNode } from 'react'

interface IHomeProps {
  t: (text: string) => ReactNode
}

const Home: NextPage<IHomeProps> = ({ t }) => (
  <>
    <Head title="homepage" />
  </>
)

export default withTranslation('common')(Home)
