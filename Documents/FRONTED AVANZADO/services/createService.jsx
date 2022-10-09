import axios from 'axios'

const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1/'

const token = window.localStorage.getItem('token')
const config = {
  headers: { Authorization: `JWT ${token}` }
}

const registerUser = (data) => axios.post(`${BASE_URL}`, data)
const loginUser = (data) => axios.post(`${BASE_URL}`, data)
const getOnlyUser = (id) => axios.get(`${BASE_URL}${id}`, config)
const itemsUser = (data) => axios.get(`${BASE_URL}`, data)
const itemApp = (id) => axios.get(`${BASE_URL}${id}`)

export {
    registerUser,
    loginUser,
    getOnlyUser,
    itemsUser,
    itemApp
}