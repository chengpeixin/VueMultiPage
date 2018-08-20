// config axios
import axios from 'axios'

let request = axios.create()

request.defaults.timeout = 5000
request.withCredentials = false
request.responseType = `json`

export default request
