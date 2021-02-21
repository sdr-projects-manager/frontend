import { IBudget } from './IBudget'
import { ITeam } from './ITeams'

export interface IProject {
  id: number
  name: string
  team: ITeam
  teamId?: number
  limitation: number
  state: 0
  budget: IBudget
}

export type IProjects = Array<IProject>
