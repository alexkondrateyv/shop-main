import axios from "axios"

export const axiosGet = (url: string) => {
  return axios.get(url);
}

export const axiosPost = (url: string, data: object) => {
  return axios.post(url, data);
}
