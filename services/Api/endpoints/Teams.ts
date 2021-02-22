import { ITeam, ITeams } from 'types/ITeams'
import { AxiosResponse } from 'axios'
import { IUsers } from 'types/IUsers'
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

  async add(data: Partial<ITeam>) {
    return axiosInstance.post(`${this.base}`, data)
  }

  async edit(id: number, data: Partial<ITeam>): Promise<AxiosResponse<ITeam>> {
    return axiosInstance.put(`${this.base + id}`, data)
  }

  async delete(id: number): Promise<AxiosResponse> {
    return axiosInstance.delete(`${this.base + id}`)
  }

  async getMembers(id: number): Promise<AxiosResponse> {
    return axiosInstance.get(`${this.base}members/${id}`)
  }
}
