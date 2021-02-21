import { render } from '@testing-library/react'
import TeamForm, { TeamFormProps } from './TeamForm'

describe('TeamForm', () => {
  const defaultProps: TeamFormProps = {}

  it('should render', () => {
    const props = { ...defaultProps }
    const { asFragment, queryByText } = render(<TeamForm {...props} />)

    expect(asFragment()).toMatchSnapshot()
    expect(queryByText('TeamForm')).toBeTruthy()
  })
})
