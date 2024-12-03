import axios from 'axios';
import type { AxiosResponse, AxiosRequestConfig } from 'axios';
import { BASE_SERVER_URL } from '@/app.constants';

export class API {
  async get<T>(url: string, config?: AxiosRequestConfig): AxiosResponse<T> {
    return axios.get<T>(`${BASE_SERVER_URL}/api${url}`, config);
  }
}
