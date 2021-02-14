import { ITask, ITasks } from 'types/ITasks'
import { AxiosResponse } from 'axios'
import { axiosInstance } from '../config'
import { IApi } from '../IApi'

export default class Tasks implements IApi {
  base = 'tasks/'

  async get(): Promise<AxiosResponse<ITasks>> {
    return axiosInstance.get(this.base)
  }

  async getById(id: number): Promise<AxiosResponse<ITask>> {
    return axiosInstance.get(`${this.base + id}`)
  }

  async add(data: Partial<ITask>): Promise<AxiosResponse<ITask>> {
    return axiosInstance.post(`${this.base}`, data)
  }

  async delete(id: number): Promise<AxiosResponse> {
    return axiosInstance.delete(`${this.base + id}`)
  }
}
