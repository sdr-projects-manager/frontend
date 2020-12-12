import 'antd/lib/style/themes/default.less'
import 'antd/dist/antd.less'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Layout, Menu, Breadcrumb } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import pages from 'data/pages'
import { useRouter } from 'next/router'

const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  return (
    <Layout>
      <Header
        className="header"
        style={{
          padding: 0,
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[router.pathname]}
        >
          {pages.map((page) => (
            <Menu.Item key={page.path}>{page.name}</Menu.Item>
          ))}
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            theme="dark"
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Submenu">
              <Menu.Item key="1">option1</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: '#fff',
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
  )
}

export default MyApp
