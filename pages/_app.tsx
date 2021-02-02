import GlobalStyles from '@styles/GlobalStyles'
import NProgress from 'nprogress'
import store from '@store/store'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Layout } from 'antd'
import { Provider } from 'react-redux'
import Router from 'next/router'
import SwitchTemplate from '@components/templates/SwitchTemplate'
import { appWithTranslation } from '../locale/i18n'

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Layout>
      <GlobalStyles />
      <SwitchTemplate Component={Component} pageProps={pageProps} />
    </Layout>
  </Provider>
)

export default appWithTranslation(MyApp)
