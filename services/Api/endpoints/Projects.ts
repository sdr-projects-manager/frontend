import { axiosInstance } from '../config'
import { IApi } from '../IApi'

export default class Projects implements IApi {
  base = 'projects/'

  async get() {
    return axiosInstance.get(this.base)
  }

  async getById(id: number) {
    return axiosInstance.get(`${this.base}${id}`)
  }

  async add() {
    return axiosInstance.post(`${this.base}`)
  }
}
