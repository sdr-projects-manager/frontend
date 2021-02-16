import { IRole } from 'types/IRoles'

const pages: Array<{
  name: string
  path: string
  role: '' | IRole
}> = [
  {
    name: 'homepage',
    path: '/',
    role: ''
  },
  {
    name: 'teams',
    path: '/teams',
    role: ''
  },
  {
    name: 'users',
    path: '/users',
    role: 'ADMIN'
  }
]

export default pages
