import axios from 'axios'

const http = axios.create({
    baseURL: 'https://codecrackdown.com/'
})

export const getAllUsers = async() => {
    const res = await http.get('/users')
    return res.data
}
export const getUserById = async(id) => {
    const res = await http.get(`/users/${id}`)
    return res.data
}
export const registerUser = async(data) => {
    const res = await http.post(`/users/register`, data)
    return res.data
}
export const loginUser = async(data) => {
    const res = await http.post(`/users/login`, data)
    return res.data
}
export const updateUserById = async(id, data) => {
    const res = await http.put(`/users/${id}/edit`, data)
    return res.data
}
export const deleteUserById = async(id) => {
    const res = await http.delete(`/users/${id}/delete`)
    return res.data
}