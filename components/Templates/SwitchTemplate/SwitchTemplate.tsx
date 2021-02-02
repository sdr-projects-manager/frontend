import Loged from '@components/Templates/Loged'
import UnLoged from '@components/Templates/UnLoged'
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
    {!isLoged && <UnLoged />}
  </>
)

const mapStateToProps = (state: IStore) => ({
  isLoged: !!state.user.token
})

export default connect(mapStateToProps)(SwitchTemplate)
