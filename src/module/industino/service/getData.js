import axios from '@/config/axios.js'
import Json from '@/module/industino/json/FeHelper'
// request demo
export const getData = (data = {}) => axios.get('https://api.myjson.com/bins/1ba5jq', {})
export const getPeople = data => Json
