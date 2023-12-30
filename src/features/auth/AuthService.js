import axios from "axios"

const API_URL = "/api/user"

const register = async (userdata) => {
  const response = await axios.post(API_URL + "/register", userdata)
  localStorage.setItem("user", JSON.stringify(response.data))
  return response.data

}


const login = async (userdata) => {
  const response = await axios.post(API_URL + "/login", userdata)
  localStorage.setItem("user", JSON.stringify(response.data))
  return response.data
}

const authService = {
  register,
  login
}

export default authService