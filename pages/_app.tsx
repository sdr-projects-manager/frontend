import GlobalStyles from '@styles/GlobalStyles'
import NProgress from 'nprogress'
import Router from 'next/router'
import SwitchTemplate from '@components/templates/SwitchTemplate'
import store from '@store/store'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Provider } from 'react-redux'
import { appWithTranslation } from '../locale/i18n'

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <GlobalStyles />
    <SwitchTemplate Component={Component} pageProps={pageProps} />
  </Provider>
)

export default appWithTranslation(MyApp)
