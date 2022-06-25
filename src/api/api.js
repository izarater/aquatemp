import axios from 'axios'


export default axios.create({
  baseURL : 'http://aquality-backend.herokuapp.com/api'
})