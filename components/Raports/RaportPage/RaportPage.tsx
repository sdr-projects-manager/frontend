import { isError, useQuery } from 'react-query'
import { toast } from 'react-toastify'
import Raports from 'services/Api/endpoints/Raports'
import { withTranslation } from 'locale/i18n'

export interface RaportPageProps {
  t: (text: string) => string
  id: number
}

const RaportPage: React.FunctionComponent<RaportPageProps> = ({ id, t }) => {
  const { isLoading, error, data } = useQuery('team', () =>
    new Raports().getById(id).then((res) => res.data)
  )

  if (isError(error)) toast.error(t(error.message))

  return <></>
}

export default withTranslation('common')(RaportPage)
