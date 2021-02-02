import Link from 'next/link'
import pages from 'data/pages'
import { Menu } from 'antd'
import { useRouter } from 'next/router'
import { withTranslation } from 'locale/i18n'
import UserSettings from './UserSettings'

interface IMainMenu {
  t: (text: string) => string
}

const MainMenu: React.FC<IMainMenu> = ({ t }) => {
  const { pathname } = useRouter()

  return (
    <Menu
      style={{
        display: 'flex'
      }}
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
      <Menu.Item style={{ marginLeft: 'auto', padding: '0', display: 'flex' }}>
        <UserSettings />
      </Menu.Item>
    </Menu>
  )
}
export default withTranslation('common')(MainMenu)
