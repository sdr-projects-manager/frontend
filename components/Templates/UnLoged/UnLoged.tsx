import { setToken } from '@store/slices/userSlice'
import { useDispatch } from 'react-redux'

const UnLoged: React.FunctionComponent = () => {
  const dispatch = useDispatch()

  return (
    <button type="button" onClick={() => dispatch(setToken('ss'))}>
      Login
    </button>
  )
}

export default UnLoged
