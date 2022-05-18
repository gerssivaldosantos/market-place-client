import axios, { AxiosResponse } from 'axios'
import { userTypeDto } from 'src/dtos/userType'
import { baseUrl, getHeaders } from './useRequest'

export const useUserType = {
  async getAll (headers = {}):Promise<userTypeDto[]> {
    const result:AxiosResponse = await axios.get(`${baseUrl}/user-types`, { headers: getHeaders(headers) })
    return result.data.content
  }
}
