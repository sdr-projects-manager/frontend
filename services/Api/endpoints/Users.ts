import { AxiosResponse } from 'axios'
import { IProject } from 'types/IProjects'
import { axiosInstance } from '../config'
import { IApi } from '../IApi'

export default class Users implements IApi {
  base = 'users/'

  async get() {
    return axiosInstance.get(this.base)
  }

  async getById(id: number) {
    return axiosInstance.get(`${this.base}${id}`)
  }

  async add(data: Partial<IProject>) {
    return axiosInstance.post(`${this.base}`, data)
  }

  async delete(id: number): Promise<AxiosResponse> {
    return axiosInstance.delete(`${this.base + id}`)
  }
}
