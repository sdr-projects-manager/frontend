import { render } from '@testing-library/react'
import UserForm, { UserFormProps } from './UserForm'

describe('UserForm', () => {
  const defaultProps: UserFormProps = {}

  it('should render', () => {
    const props = { ...defaultProps }
    const { asFragment, queryByText } = render(<UserForm {...props} />)

    expect(asFragment()).toMatchSnapshot()
    expect(queryByText('UserForm')).toBeTruthy()
  })
})
