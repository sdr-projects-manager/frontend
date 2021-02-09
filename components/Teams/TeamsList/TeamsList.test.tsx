import { render } from '@testing-library/react'
import TeamsList, { TeamsListProps } from './TeamsList'

describe('TeamsList', () => {
  const defaultProps: TeamsListProps = {}

  it('should render', () => {
    const props = { ...defaultProps }
    const { asFragment, queryByText } = render(<TeamsList {...props} />)

    expect(asFragment()).toMatchSnapshot()
    expect(queryByText('TeamsList')).toBeTruthy()
  })
})
