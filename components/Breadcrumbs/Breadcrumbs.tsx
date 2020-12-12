import { Breadcrumb } from 'antd'
import { useRouter } from 'next/router'

const Breadcrumbs: React.FC = () => {
  const router = useRouter()
  const { route, asPath } = router

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {route === '/' && (
        <Breadcrumb.Item key="/homepage">Homepage</Breadcrumb.Item>
      )}
      {route === '/_error' && (
        <>
          <Breadcrumb.Item key="/homepage" href="/">
            Homepage
          </Breadcrumb.Item>
          <Breadcrumb.Item key="error-404">Error 404</Breadcrumb.Item>
        </>
      )}
      {route !== '/_error' &&
        asPath
          .split('/')
          .map((path) => <Breadcrumb.Item key={path}>{path}</Breadcrumb.Item>)}
    </Breadcrumb>
  )
}

export default Breadcrumbs
