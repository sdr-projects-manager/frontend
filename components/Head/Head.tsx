import NextHead from 'next/head'
import { withTranslation } from 'locale/i18n'
import { Typography } from 'antd'

const { Title } = Typography

interface IProps {
  title: string
  t: (text: string) => string
}

const Head: React.FC<IProps> = ({ title, t }) => (
  <a>
    <NextHead>
      <title>{t(title)}</title>
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
    <Title>{t(title)}</Title>
  </a>
)

export default withTranslation('common')(Head)
