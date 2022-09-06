import axios from 'axios'


export const getAuthHeader = () => `Bearer ${sessionStorage.getItem('token')}`

export const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/bank/api/v1',
});