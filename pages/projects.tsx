import { Typography } from 'antd'
import ProjectsList from '@components/Projects/ProjectsList'
import Head from '@components/Head'

const { Title } = Typography

const Project: React.FC = () => (
  <>
    <Head title="Projects" />
    <Title>Projects</Title>
    <ProjectsList />
  </>
)

export default Project
