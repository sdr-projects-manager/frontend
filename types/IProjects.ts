export interface IProject {
  id: number
  name: string
  teamId: number
  limitation: number
  state: 0
}

export type IProjects = Array<IProject>
