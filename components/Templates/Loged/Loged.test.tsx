import { render } from '@testing-library/react'
import Loged, { LogedProps } from './Loged'

describe('Loged', () => {
  const defaultProps: LogedProps = {}

  it('should render', () => {
    const props = { ...defaultProps }
    const { asFragment, queryByText } = render(<Loged {...props} />)

    expect(asFragment()).toMatchSnapshot()
    expect(queryByText('Loged')).toBeTruthy()
  })
})
