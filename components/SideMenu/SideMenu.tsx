import Link from 'next/link'
import userMenu from 'data/userMenu'
import { Menu } from 'antd'
import { ReactNode } from 'react'
import { withTranslation } from 'locale/i18n'
import { useRouter } from 'next/router'

interface ISideMenuProps {
  t: (text: string) => ReactNode
}

const SideMenu: React.FC<ISideMenuProps> = ({ t }) => {
  const { pathname } = useRouter()

  return (
    <Menu
      theme="dark"
      mode="inline"
      style={{ height: '100%', borderRight: 0 }}
      defaultSelectedKeys={[pathname]}
      // selectedKeys={[menuActiveItem || pathname]}
      // onClick={({ keyPath }) => setMenuActiveItem(`${keyPath}`)}
    >
      {userMenu.map((menu) => (
        <Menu.Item
          key={menu.path}
          icon={menu.icon}
          style={{
            margin: 0
          }}
        >
          <Link href={menu.path}>{t(menu.name)}</Link>
        </Menu.Item>
      ))}
    </Menu>
  )
}
export default withTranslation('common')(SideMenu)
