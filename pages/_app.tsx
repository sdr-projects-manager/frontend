import 'antd/dist/antd.less'
import 'antd/lib/style/themes/default.less'
import 'nprogress/nprogress.css'
import Breadcrumbs from '@components/Breadcrumbs'
import GlobalStyles from '@styles/GlobalStyles'
import Link from 'next/link'
import NProgress from 'nprogress'
import pages from 'data/pages'
import store from '@store/store'
import userMenu from 'data/userMenu'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Layout, Menu } from 'antd'
import { Provider } from 'react-redux'
import { useRouter, Router } from 'next/router'
import { useState } from 'react'

const { Header, Content, Sider, Footer } = Layout

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { pathname } = useRouter()
  const [menuActiveItem, setMenuActiveItem] = useState('')

  return (
    <Provider store={store}>
      <Layout>
        <Header
          className="header"
          style={{
            padding: 0
          }}
        >
          <GlobalStyles />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[pathname]}
            selectedKeys={[menuActiveItem || pathname]}
            onClick={({ keyPath }) => setMenuActiveItem(`${keyPath}`)}
          >
            {pages.map((page) => (
              <Menu.Item key={page.path}>
                <Link href={page.path}>{page.name}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              theme="dark"
              mode="inline"
              style={{ height: '100%', borderRight: 0 }}
              defaultSelectedKeys={[pathname]}
              selectedKeys={[menuActiveItem || pathname]}
              onClick={({ keyPath }) => setMenuActiveItem(`${keyPath}`)}
            >
              {userMenu.map((menu) => (
                <Menu.Item
                  key={menu.path}
                  icon={menu.icon}
                  style={{
                    margin: 0
                  }}
                >
                  <Link href={menu.path}>{menu.name}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumbs />
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: '#fff'
              }}
            >
              <Component {...pageProps} />
            </Content>
          </Layout>
        </Layout>
        <Footer style={{ textAlign: 'center', background: '#17191D' }}>
          <a
            href="https://github.com/sdr-projects-manager"
            target="_blank"
            rel="noreferrer"
          >
            &copy; {new Date().getFullYear()} SDR PROJECTS MANAGER
          </a>
        </Footer>
      </Layout>
    </Provider>
  )
}

export default MyApp
