import axios from 'axios';

export function getToken () {
   return localStorage.getItem("token");
};
export function setToken (token) {
   localStorage.setItem("token", token);
};
export function clearToken () {
   localStorage.removeItem("token");
}

export const axiosWithAuth = () => {
   return axios.create({
      baseURL: "https://ptbw-art-portfolio.herokuapp.com",
      headers: {
         'Content-Type': 'application/json',
         'Authorization': getToken()
      }
   })
}