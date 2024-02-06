import axios from "axios"
const baseURL = 'https://covid19-brazil-api.now.sh/api/report/v1';

export const api = axios.create({
  baseURL,
});
