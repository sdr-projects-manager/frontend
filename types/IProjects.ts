import { IBudget } from './IBudget'

export interface IProject {
  id: number
  name: string
  teamId: number
  limitation: number
  state: 0
  budget: IBudget
}

export type IProjects = Array<IProject>
