import type { TDataAxios } from '../_base'
import apiClient from '../_base'

const filmApi = {
  getAll: <Res>(): Promise<TDataAxios<Res>> => {
    const url = '/guest/film/getMultiple'
    return apiClient.post(url, { ids: [] })
  },
  getOne: <Res>(id: string): Promise<TDataAxios<Res>> => {
    const url = `/guest/film/getMultiple`
    return apiClient.post(url, { ids: [id] })
  },
  getScheduler: <Res>(idFilm: string, time: string): Promise<TDataAxios<Res>> => {
    const url = `/guest/showtime/film`
    return apiClient.post(url, { idFilm, time })
  },
}

export default filmApi
