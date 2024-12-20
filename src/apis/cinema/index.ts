import type { TDataAxios } from '../_base'
import apiClient from '../_base'

const cinemaApi = {
  getAll: <Res>(): Promise<TDataAxios<Res>> => {
    const url = '/guest/cinema/getAll'
    return apiClient.get(url)
  },
}

export default cinemaApi
