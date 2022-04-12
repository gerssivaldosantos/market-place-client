import axios, { AxiosResponse } from 'axios'
import { userDto, userResponseDto } from '../dtos/user'
import { baseUrl, getHeaders } from './useRequest'

export const useUser = {
  async get (id:string, headers = {}):Promise<userResponseDto> {
    const result:AxiosResponse = await axios.get(`${baseUrl}/users/${id}`, { headers: getHeaders(headers) })
    return result.data
  },

  async post (data:userDto, headers = {}):Promise<userResponseDto> {
    const result:AxiosResponse = await axios.post(`${baseUrl}/users`, data, { headers: getHeaders(headers) })
    return result.data
  }
}
