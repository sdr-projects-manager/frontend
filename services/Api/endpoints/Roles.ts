import { AxiosResponse } from 'axios'
import { IRoles } from 'types/IRoles'
import { axiosInstance } from '../config'

export default class Roles {
  base = 'roles/'

  async get(): Promise<AxiosResponse<IRoles>> {
    return axiosInstance.get(this.base)
  }
}
