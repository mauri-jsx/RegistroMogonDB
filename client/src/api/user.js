import axios from "axios"

const API = "http://localhost:4000"
export const  registeeResquest = user => axios.post(`${API}/register`, user)