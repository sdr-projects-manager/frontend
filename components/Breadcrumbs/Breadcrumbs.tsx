import Link from 'next/link'
import { Breadcrumb } from 'antd'
import { useRouter } from 'next/router'
import { withTranslation } from 'locale/i18n'

interface IBreadcrumbsProps {
  t: (text: string) => string
}

const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({ t }) => {
  const router = useRouter()
  const { route, asPath } = router

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {route === '/' && (
        <Breadcrumb.Item key="/homepage">{t('Homepage')}</Breadcrumb.Item>
      )}
      {route === '/_error' && (
        <>
          <Breadcrumb.Item key="/homepage" href="/">
            {t('Homepage')}
          </Breadcrumb.Item>
          <Breadcrumb.Item key="error-404">{t('Error 404')}</Breadcrumb.Item>
        </>
      )}
      {route !== '/_error' &&
        asPath.split('/').map(
          (path, key) =>
            path && (
              <Breadcrumb.Item key={path}>
                {key > 0 && <Link href={`/${path}`}>{t(path)}</Link>}
                {key === 0 && t(path)}
              </Breadcrumb.Item>
            )
        )}
    </Breadcrumb>
  )
}

export default withTranslation('common')(Breadcrumbs)
