import { IUsers } from './IUsers'

export interface ITeam {
  id: number
  name: string
  users: IUsers
  maxPeople: number
  createdAt: string
  updatedAt: string
}

export type ITeams = Array<ITeam>
