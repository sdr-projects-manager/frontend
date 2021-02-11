export interface ITask {
  id: number
  name: string
  description: string
  cost: string
  priority: string
  projectId: number
}

export type ITasks = Array<ITask>
