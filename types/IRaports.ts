import { IProject } from './IProjects'
import { ITeam } from './ITeams'

export interface IRaport {
  id: number
  project: IProject
  team: ITeam
}

export type IRaports = Array<IRaport>
