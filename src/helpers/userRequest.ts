import axios, { AxiosResponse } from 'axios'
import { userResponse } from 'src/models/userResponse'
import { baseUrl, getHeaders } from './useRequest'

export const useUser = {
  async get (id:string, headers = {}):Promise<userResponse> {
    const result:AxiosResponse = await axios.get(`${baseUrl}/users/${id}`, { headers: getHeaders(headers) })
    return result.data
  }
}
