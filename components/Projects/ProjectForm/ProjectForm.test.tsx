import { render } from '@testing-library/react'
import ProjectForm, { ProjectFormProps } from './ProjectForm'

describe('ProjectForm', () => {
  const defaultProps: ProjectFormProps = {}

  it('should render', () => {
    const props = { ...defaultProps }
    const { asFragment, queryByText } = render(<ProjectForm {...props} />)

    expect(asFragment()).toMatchSnapshot()
    expect(queryByText('ProjectForm')).toBeTruthy()
  })
})
