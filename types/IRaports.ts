import { IProject } from './IProjects'
import { ITeam } from './ITeams'

export interface IRaport {
  id: number
  project: IProject
  team: ITeam
  profitability: number
  projectName: string
}

export type IRaports = Array<IRaport>
