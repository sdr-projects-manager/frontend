import { IRole } from 'types/IRoles'

// eslint-disable-next-line consistent-return
export const getRoleColor = (role: IRole) => {
  if (role === 'ADMIN') return 'magenta'
  if (role === 'PM') return 'red'
  if (role === 'TL') return 'orange'
  if (role === 'USER') return 'gold'
  return 'lime'
}
