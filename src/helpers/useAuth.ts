import axios, { AxiosResponse } from 'axios'
import { AuthRequest } from 'src/dtos/authRequest'
import { authResponse } from 'src/models/auth'
import { baseUrl, getHeaders } from './useRequest'

export const useAuth = {
  async login (params:AuthRequest, headers = {}):Promise<authResponse> {
    const result:AxiosResponse<authResponse> = await axios.post(`${baseUrl}/auth`, params, { headers: getHeaders(headers) })
    return result.data
  }
}
