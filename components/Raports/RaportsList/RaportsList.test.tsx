import { render } from '@testing-library/react'
import RaportsList, { RaportsListProps } from './RaportsList'

describe('RaportsList', () => {
  const defaultProps: RaportsListProps = {}

  it('should render', () => {
    const props = { ...defaultProps }
    const { asFragment, queryByText } = render(<RaportsList {...props} />)

    expect(asFragment()).toMatchSnapshot()
    expect(queryByText('RaportsList')).toBeTruthy()
  })
})
