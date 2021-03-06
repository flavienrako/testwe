import { AxiosRequestConfig } from 'axios'
import { Book, BookApiResponse } from 'types'

import Axios from './configuration'

export async function getBooks(request: AxiosRequestConfig) {
  try {
    const response = await Axios.request<BookApiResponse>(request)
    return response.data || []
  } catch (error) {
    throw new Error(
      `Error in 'axiosGetJsonData(${request.url})': ${error.message}`
    )
  }
}
export async function getCharacher(request: AxiosRequestConfig) {
  try {
    const response = await Axios.request<Book>(request)
    return response.data
  } catch (error) {
    throw new Error(
      `Error in 'axiosGetJsonData(${request.url})': ${error.message}`
    )
  }
}
