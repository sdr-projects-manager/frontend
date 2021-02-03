import { render } from '@testing-library/react'
import UnLogged from '@components/templates/UnLogged/UnLogged'

describe('UnLogged', () => {
  it('should render', () => {
    const { asFragment, queryByText } = render(<UnLogged />)

    expect(asFragment()).toMatchSnapshot()
    expect(queryByText('UnLogged')).toBeTruthy()
  })
})
