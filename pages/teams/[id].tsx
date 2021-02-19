import TeamPage from '@components/Teams/TeamPage'

interface TeamPage {
  id: number
}

const Team: React.FC<TeamPage> = ({ id }) => (
  <>
    <TeamPage id={id} />
  </>
)

export const getServerSideProps = async ({
  params
}: {
  params: { id: number }
}) => ({ props: { id: params.id } })

export default Team
