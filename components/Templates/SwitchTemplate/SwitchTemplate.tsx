import Loged from '@components/templates/Loged'
import UnLogged from '@components/templates/UnLogged'
import { setToken } from '@store/slices/authorisationSlice'
import { IStore } from '@store/store'
import { ComponentType, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

export interface SwitchTemplateProps {
  Component: ComponentType
  pageProps: any
  token?: string
}

const SwitchTemplate: React.FunctionComponent<SwitchTemplateProps> = ({
  Component,
  pageProps,
  token
}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (!token) {
      const localStorageToken = localStorage.getItem('token')
      dispatch(
        setToken({ token: localStorageToken ? `${localStorageToken}` : '' })
      )
    }
  }, [token])

  return (
    <>
      {token && <Loged Component={Component} pageProps={pageProps} />}
      {!token && <UnLogged />}
    </>
  )
}
const mapStateToProps = (state: IStore) => ({
  token: state.authorisation.token
})

export default connect(mapStateToProps)(SwitchTemplate)
