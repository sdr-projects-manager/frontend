import { IProject } from './IProjects'

export interface ITask {
  id: number
  name: string
  description: string
  cost: string
  priority: string
  project: IProject
}

export type ITasks = Array<ITask>
