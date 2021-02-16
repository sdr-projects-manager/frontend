/* eslint-disable array-callback-return */
import Link from 'next/link'
import pages from 'data/pages'
import { Menu } from 'antd'
import { useRouter } from 'next/router'
import { withTranslation } from 'locale/i18n'
import { isCurrentUserhasRole } from '@utils/authority'
import UserSettings from './UserSettings'

interface IMainMenu {
  t: (text: string) => string
  menuActiveItem: string
  setMenuActiveItem: (path: string) => void
}

const MainMenu: React.FC<IMainMenu> = ({
  t,
  menuActiveItem,
  setMenuActiveItem
}) => {
  const { pathname } = useRouter()

  return (
    <Menu
      style={{
        display: 'flex'
      }}
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[pathname]}
      selectedKeys={[menuActiveItem || pathname]}
      onClick={({ keyPath }) => setMenuActiveItem(`${keyPath}`)}
    >
      {/* eslint-disable-next-line consistent-return */}
      {pages.map(({ path, name, role }) => {
        if (role === '' || isCurrentUserhasRole(role)) {
          return (
            <Menu.Item key={path}>
              <Link href={path}>{t(name)}</Link>
            </Menu.Item>
          )
        }
      })}
      <Menu.Item style={{ marginLeft: 'auto', padding: '0', display: 'flex' }}>
        <UserSettings />
      </Menu.Item>
    </Menu>
  )
}
export default withTranslation('common')(MainMenu)
