import type { AxiosInstance } from 'axios'
import useAuth from '@/hooks/useAuth'
import useLoading from '@/hooks/useLoading'
import axios from 'axios'

const { showLoading, hideLoading } = useLoading()
const { getToken } = useAuth()
export type TDataAxios<TRes = any> = {
  data: TRes
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

apiClient.interceptors.request.use(
  (config) => {
    showLoading()
    const token = getToken()
    if (token) {
      config.headers.Authorization = `${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

apiClient.interceptors.response.use(
  (response) => {
    hideLoading()
    return response
  },
  (error) => {
    hideLoading()
    return Promise.reject(error)
  },
)

export default apiClient
