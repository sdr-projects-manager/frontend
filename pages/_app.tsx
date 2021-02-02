import Breadcrumbs from '@components/Breadcrumbs'
import GlobalStyles from '@styles/GlobalStyles'
import NProgress from 'nprogress'
import store from '@store/store'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Layout } from 'antd'
import { Provider } from 'react-redux'
import { Router } from 'next/router'
import SideMenu from '@components/SideMenu'
import MainMenu from '@components/MainMenu'
import { appWithTranslation } from '../locale/i18n'

const { Header, Content, Sider, Footer } = Layout

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  // const { pathname } = useRouter()
  // const [menuActiveItem, setMenuActiveItem] = useState('')

  <Provider store={store}>
    <Layout>
      <Header
        className="header"
        style={{
          padding: 0
        }}
      >
        <GlobalStyles />
        <MainMenu />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <SideMenu />
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

export default appWithTranslation(MyApp)
