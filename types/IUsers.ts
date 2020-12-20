export interface IUser {
  id: number
  login: string
  password: string
  name: string
  lastName: string
  email: string
  modificationDate: string
  role: {
    id: number
    name: string
  }
}

export type IUsers = Array<IUser>
