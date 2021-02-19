import { IRole } from 'types/IRoles'

const pages: Array<{
  name: string
  path: string
  role: '' | IRole
}> = [
  {
    name: 'Homepage',
    path: '/',
    role: ''
  },
  {
    name: 'Teams',
    path: '/teams',
    role: ''
  },
  {
    name: 'Users',
    path: '/users',
    role: 'ADMIN'
  },
  {
    name: 'Raports',
    path: '/raports',
    role: 'ADMIN'
  }
]

export default pages
