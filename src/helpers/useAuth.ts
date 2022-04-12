import axios, { AxiosResponse } from 'axios'
import { AuthRequest, authResponse } from 'src/dtos/auth'
import { baseUrl, getHeaders } from './useRequest'

export const useAuth = {
  async login (params:AuthRequest, headers = {}):Promise<authResponse> {
    const result:AxiosResponse<authResponse> = await axios.post(`${baseUrl}/auth`, params, { headers: getHeaders(headers) })
    return result.data
  }
}
