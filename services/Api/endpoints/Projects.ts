import { AxiosResponse } from 'axios'
import { IProject, IProjects } from 'types/IProjects'
import { axiosInstance } from '../config'
import { IApi } from '../IApi'

export default class Projects implements IApi {
  base = 'projects/'

  async get(): Promise<AxiosResponse<IProjects>> {
    return axiosInstance.get(this.base)
  }

  async getById(id: number): Promise<AxiosResponse<IProject>> {
    return axiosInstance.get(`${this.base}${id}`)
  }

  async add(data: Partial<IProject>) {
    return axiosInstance.post(`${this.base}`, data)
  }

  async delete(id: number): Promise<AxiosResponse> {
    return axiosInstance.delete(`${this.base + id}`)
  }

  async edit(
    id: number,
    data: Partial<IProject>
  ): Promise<AxiosResponse<IProject>> {
    return axiosInstance.put(`${this.base + id}`, data)
  }
}
