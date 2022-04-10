import axios, { AxiosPromise, AxiosResponse } from 'axios'
import { AuthRequest } from 'src/dtos/authRequest'
import { authResponse } from 'src/models/auth'

const baseUrl = 'http://localhost:8085/api/v1'

const getHeaders = (headers = {}) => {
  if (localStorage.token) {
    const token = localStorage.getItem('token')
    return {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers
    }
  }
}
export const useRequest = {
  get (routeName:string, headers = {}) {
    return axios.get(`${baseUrl}/${routeName}`, { headers: getHeaders(headers) })
  },
  post (routeName:string, params?:unknown, headers = {}):AxiosPromise {
    return axios.post(`${baseUrl}/${routeName}`, params, { headers: getHeaders(headers) })
  }
}

export const useAuth = {
  async login (params:AuthRequest, headers = {}):Promise<authResponse> {
    const result:AxiosResponse<authResponse> = await axios.post(`${baseUrl}/auth`, params, { headers: getHeaders(headers) })
    return result.data
  }
}
