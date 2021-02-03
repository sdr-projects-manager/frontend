import Loged from '@components/templates/Loged'
import UnLogged from '@components/templates/UnLogged'
import { IStore } from '@store/store'
import { ComponentType } from 'react'
import { connect } from 'react-redux'

export interface SwitchTemplateProps {
  Component: ComponentType
  pageProps: any
  isLoged?: boolean
}

const SwitchTemplate: React.FunctionComponent<SwitchTemplateProps> = ({
  Component,
  pageProps,
  isLoged
}) => (
  <>
    {isLoged && <Loged Component={Component} pageProps={pageProps} />}
    {!isLoged && <UnLogged />}
  </>
)

const mapStateToProps = (state: IStore) => ({
  isLoged: !!state.user.token
})

export default connect(mapStateToProps)(SwitchTemplate)
