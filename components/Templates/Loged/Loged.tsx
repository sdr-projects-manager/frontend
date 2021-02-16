import SideMenu from '@components/SideMenu'
import MainMenu from '@components/MainMenu'
import Breadcrumbs from '@components/Breadcrumbs'
import { Layout } from 'antd'
import { ComponentType, useState } from 'react'
import { useQuery } from 'react-query'
import CurrentUser from 'services/Api/endpoints/CurrentUser'

const { Header, Content, Sider, Footer } = Layout

export interface LogedProps {
  Component: ComponentType
  pageProps: any
}

const Loged: React.FunctionComponent<LogedProps> = ({
  Component,
  pageProps
}) => {
  useQuery('currentUser', () => new CurrentUser().get().then((res) => res.data))
  const [menuActiveItem, setMenuActiveItem] = useState<string>('')

  return (
    <Layout>
      <Layout>
        <Header
          className="header"
          style={{
            padding: 0
          }}
        >
          <MainMenu
            menuActiveItem={menuActiveItem}
            setMenuActiveItem={setMenuActiveItem}
          />
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <SideMenu
              menuActiveItem={menuActiveItem}
              setMenuActiveItem={setMenuActiveItem}
            />
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
    </Layout>
  )
}

export default Loged
