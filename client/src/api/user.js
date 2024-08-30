import axios from "axios"

const API = "http://localhost:3000"
export const  registeeResquest = user => axios.post(`${API}/register`, user)