import axios from '@/config/axios.js'
// request demo
export const getData = (data = {}) => axios.get('https://api.myjson.com/bins/1ba5jq', {})
