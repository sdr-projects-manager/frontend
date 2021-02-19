import { render } from '@testing-library/react'
import TeamPage, { TeamPageProps } from './TeamPage'

describe('TeamPage', () => {
  const defaultProps: TeamPageProps = {}

  it('should render', () => {
    const props = { ...defaultProps }
    const { asFragment, queryByText } = render(<TeamPage {...props} />)

    expect(asFragment()).toMatchSnapshot()
    expect(queryByText('TeamPage')).toBeTruthy()
  })
})
