import { axiosInstance } from '../config'

export default class CurrentUser {
  base = 'currentUser/'

  async get() {
    return axiosInstance.get(`${this.base}`)
  }
}
