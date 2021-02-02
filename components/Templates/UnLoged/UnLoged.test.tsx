import { render } from '@testing-library/react'
import UnLoged, { UnLogedProps } from './UnLoged'

describe('UnLoged', () => {
  const defaultProps: UnLogedProps = {}

  it('should render', () => {
    const props = { ...defaultProps }
    const { asFragment, queryByText } = render(<UnLoged {...props} />)

    expect(asFragment()).toMatchSnapshot()
    expect(queryByText('UnLoged')).toBeTruthy()
  })
})
