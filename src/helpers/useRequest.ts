import axios, { AxiosPromise } from 'axios'

export const baseUrl = process.env.API || '' /* 'http://localhost:8085/api/v1' */

export const getHeaders = (headers = {}) => {
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
