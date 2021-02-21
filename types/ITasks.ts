import { IProject } from './IProjects'

export interface ITask {
  id: number
  name: string
  description: string
  cost: string
  state: 0 | 1
  project: IProject
  projectId: number
}

export type ITasks = Array<ITask>
