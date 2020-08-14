import axios from 'axios';

console.log(process.env.REACT_APP_API_URL);

const burgerBuilderAPI = axios.create({
  baseURL: process.env.API_URL
})

export default burgerBuilderAPI;