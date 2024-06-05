import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true, // faz com que o back-end receba os cookies do front-end, para saber se o usuário está logado ou não.
})
