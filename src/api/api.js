import axios from 'axios'


export default axios.create({
  baseURL : 'http://aquality-server-production.up.railway.app/api'
})