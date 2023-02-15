import axios from "axios";
// URL_BASE: https://api.themoviedb.org/3/
// URL_API: /movie/now_playing?api_key=8e8b7222de1b443d927ab92728013cb8&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;