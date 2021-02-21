import { render } from '@testing-library/react'
import RaportPage, { RaportPageProps } from './RaportPage'

describe('RaportPage', () => {
  const defaultProps: RaportPageProps = {}

  it('should render', () => {
    const props = { ...defaultProps }
    const { asFragment, queryByText } = render(<RaportPage {...props} />)

    expect(asFragment()).toMatchSnapshot()
    expect(queryByText('RaportPage')).toBeTruthy()
  })
})
