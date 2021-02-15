import { IRole } from 'types/IRoles'

const pages: Array<{
  name: string
  path: string
  roles: [] | Array<IRole>
}> = [
  {
    name: 'homepage',
    path: '/',
    roles: []
  },
  {
    name: 'teams',
    path: '/teams',
    roles: []
  },
  {
    name: 'users',
    path: '/users',
    roles: ['ADMIN']
  }
]

export default pages
