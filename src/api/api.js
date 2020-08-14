import axios from 'axios';

const burgerBuilderAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export default burgerBuilderAPI;