import { ITeam, ITeams } from 'types/ITeams'
import { AxiosResponse } from 'axios'
import { axiosInstance } from '../config'
import { IApi } from '../IApi'

export default class Teams implements IApi {
  base = 'teams/'

  async get(): Promise<AxiosResponse<ITeams>> {
    return axiosInstance.get(this.base)
  }

  async getById(id: number): Promise<AxiosResponse<ITeam>> {
    return axiosInstance.get(`${this.base}${id}`)
  }

  async add(data: Partial<ITeams>) {
    return axiosInstance.post(`${this.base}`, data)
  }
}
