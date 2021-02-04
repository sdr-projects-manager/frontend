import axios, { AxiosInstance } from 'axios'
import LocalStorageService from 'services/LocalStorageService'

const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

function createAxiosResponseInterceptor(instance: AxiosInstance) {
  instance.interceptors.request.use(
    (config) => {
      const token = LocalStorageService.getToken()
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      Promise.reject(error)
    }
  )
}

createAxiosResponseInterceptor(axiosInstance)

export { axiosInstance }
