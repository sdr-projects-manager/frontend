export interface IUser {
  id: number
  login: string
  password: string
  name: string
  lastName: string
  email: string
  modificationDate: string
  // eslint-disable-next-line camelcase
  role_id?: number
  role: {
    id: number
    name: string
  }
}

export type IUsers = Array<IUser>
