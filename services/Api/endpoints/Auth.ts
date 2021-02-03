import { axiosInstance } from '../config'

export default class Auth {
  base = 'auth/'

  async signIn(login: string, password: string) {
    return axiosInstance.post(`${this.base}signin`, {
      login,
      password
    })
  }
}
