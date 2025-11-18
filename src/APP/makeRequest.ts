import axios from 'axios'
import type { ResponseType } from 'axios'

export interface Request {
  url: string
  method?: string
  responseType?: ResponseType
  headers?: any
  params?: any
  data?: any
  token?: string
  paramsSerializer?: (params: object | string) => string
}

const envToken = import.meta.env.VITE_API_TOKEN

function makeRequest<T>({
  url = '/',
  method = 'get',
  params,
  data,
  responseType = 'json',
  paramsSerializer,
}: Request): Promise<T> {
  return axios({
    url,
    method,
    responseType,
    headers: {},
    params,
    data,
    paramsSerializer,
  })
}
export default makeRequest