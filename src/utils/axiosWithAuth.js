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

export function getUserData () {
   return {
      token: getToken(),
      user: JSON.parse(localStorage.getItem("user"))
   };
};
export function setUserData (data) {
   setToken(data.token);
   localStorage.setItem("user", JSON.stringify(data.user));
};
export function clearUserData () {
   clearToken();
   localStorage.removeItem("user");
};

export const axiosWithAuth = () => {
   return axios.create({
      baseURL: "https://ptbw-art-portfolio.herokuapp.com",
      headers: {
         'Content-Type': 'application/json',
         'Authorization': getToken()
      }
   })
}