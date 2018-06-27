// config axios
import axios from 'axios'
// 超过10s请求超时
let request = axios.create()

request.defaults.timeout = 2500
request.withCredentials = false
request.responseType = `json`

export default request
