import { useQueryClient } from 'react-query'
import { IRole } from 'types/IRoles'

export const getAuthority: any = () => {
  const queryClient = useQueryClient()

  return queryClient.getQueryData('currentUser')
}

export const isCurrentUserhasRole = (role: IRole) => {
  const currentUser = getAuthority()
  let isHasRole = false

  if (currentUser) {
    if (currentUser.role.name.toUpperCase() === `${role.toUpperCase()}`)
      isHasRole = true

    return isHasRole
  }

  return false
}
