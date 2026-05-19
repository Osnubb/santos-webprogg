import axios from 'axios'
import { API_URL } from './constants'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const signInUser = async (payload) => {
  const response = await api.post('/signin', payload)
  return response.data
}

export const signUpUser = async (payload) => {
  const response = await api.post('/signup', payload)
  return response.data
}

export const getUsers = async () => {
  const response = await api.get('/users')
  return response.data
}
