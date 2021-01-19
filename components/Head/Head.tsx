import NextHead from 'next/head'

interface IProps {
  title: string
}

const Head: React.FC<IProps> = ({ title }) => (
  <NextHead>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
  </NextHead>
)

export default Head
