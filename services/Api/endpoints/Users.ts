import { AxiosResponse } from 'axios'
import { IProject } from 'types/IProjects'
import { IUser } from 'types/IUsers'
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

  async edit(id: number, data: Partial<IUser>) {
    return axiosInstance.put(`${this.base + id}`, data)
  }

  async delete(id: number): Promise<AxiosResponse> {
    return axiosInstance.delete(`${this.base + id}`)
  }
}
