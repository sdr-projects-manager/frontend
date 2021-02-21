import Head from 'components/Head'
import RaportPage from '@components/Raports/RaportPage'

interface RaportPageProps {
  id: number
}

const Raport: React.FC<RaportPageProps> = ({ id }) => (
  <>
    <Head title="Raport" />
    <RaportPage id={id} />
  </>
)

export const getServerSideProps = async ({
  params
}: {
  params: { id: number }
}) => ({ props: { id: params.id } })

export default Raport
