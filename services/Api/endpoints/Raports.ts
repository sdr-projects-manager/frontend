import { ITask, ITasks } from 'types/ITasks'
import { AxiosResponse } from 'axios'
import { IRaport, IRaports } from 'types/IRaports'
import { axiosInstance } from '../config'
import { IApi } from '../IApi'

export default class Raports implements IApi {
  base = 'raports/'

  async get(): Promise<AxiosResponse<IRaports>> {
    return axiosInstance.get(this.base)
  }

  async getById(id: number): Promise<AxiosResponse<ITask>> {
    return axiosInstance.get(`${this.base + id}`)
  }

  async add(data: Partial<IRaport>): Promise<AxiosResponse<IRaport>> {
    return axiosInstance.post(`${this.base}`, data)
  }

  async getTasks(id: number): Promise<AxiosResponse<ITasks>> {
    return axiosInstance.get(`${this.base}tasks/${id}`)
  }
}
