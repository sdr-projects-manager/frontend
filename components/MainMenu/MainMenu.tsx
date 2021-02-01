import Link from 'next/link'
import pages from 'data/pages'
import { Menu } from 'antd'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { withTranslation } from 'locale/i18n'

interface IMainMenu {
  t: (text: string) => ReactNode
}

const MainMenu: React.FC<IMainMenu> = ({ t }) => {
  const { pathname } = useRouter()

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[pathname]}
      // selectedKeys={[menuActiveItem || pathname]}
      // onClick={({ keyPath }) => setMenuActiveItem(`${keyPath}`)}
    >
      {pages.map((page) => (
        <Menu.Item key={page.path}>
          <Link href={page.path}>{t(page.name)}</Link>
        </Menu.Item>
      ))}
    </Menu>
  )
}
export default withTranslation('common')(MainMenu)
