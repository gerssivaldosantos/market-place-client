import axios, { AxiosResponse } from 'axios'
import { baseUrl, getHeaders } from './useRequest'

export const useProduct = {
  async deleteBulk (data:Record<string, string[]>, headers = {}):Promise<Record<string, number>> {
    const result:AxiosResponse = await axios.delete(`${baseUrl}/products`, { data, headers: { ...getHeaders(), ...headers } })
    return result.data
  }
}
