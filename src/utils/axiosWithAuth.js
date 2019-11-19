import axios from 'axios';

export const axiosWithAuth = (token) => {
   //  const token = localStorage.getItem('token')


   return axios.create({
      baseURL: "https://ptbw-art-portfolio.herokuapp.com",
       headers: {
           'Content-Type': 'application/json',
           'Authorization': `${token}`
       }
   })
}