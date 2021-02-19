import ProjectPage from '@components/Projects/ProjectPage'

interface ProjectPage {
  id: number
}

const Project: React.FC<ProjectPage> = ({ id }) => (
  <>
    <ProjectPage id={id} />
  </>
)

export const getServerSideProps = async ({
  params
}: {
  params: { id: number }
}) => ({ props: { id: params.id } })

export default Project
