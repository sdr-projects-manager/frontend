export interface ITeam {
  id: number
  name: string
  maxPeople: number
  createdAt: string
  updatedAt: string
}

export type ITeams = Array<ITeam>
