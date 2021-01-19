import { AxiosResponse } from 'axios'

export interface IApi {
  base: string
  get: () => Promise<AxiosResponse>
  getById: (id: number) => Promise<AxiosResponse>
  add: (body: any) => Promise<AxiosResponse>
}
