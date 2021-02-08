import 'react-toastify/dist/ReactToastify.css'
import GlobalStyles from '@styles/GlobalStyles'
import NProgress from 'nprogress'
import Router from 'next/router'
import SwitchTemplate from '@components/templates/SwitchTemplate'
import store from '@store/store'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { ReactQueryDevtools } from 'react-query/devtools'
import { appWithTranslation } from '../locale/i18n'

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const queryClient = new QueryClient()

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyles />
        <ToastContainer />
        <SwitchTemplate Component={Component} pageProps={pageProps} />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </Provider>
)

export default appWithTranslation(MyApp)
