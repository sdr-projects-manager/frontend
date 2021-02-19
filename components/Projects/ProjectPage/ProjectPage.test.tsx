import { render } from '@testing-library/react'
import ProjectPage, { ProjectPageProps } from './ProjectPage'

describe('ProjectPage', () => {
  const defaultProps: ProjectPageProps = {}

  it('should render', () => {
    const props = { ...defaultProps }
    const { asFragment, queryByText } = render(<ProjectPage {...props} />)

    expect(asFragment()).toMatchSnapshot()
    expect(queryByText('ProjectPage')).toBeTruthy()
  })
})
