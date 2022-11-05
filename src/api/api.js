import axios from 'axios'


export default axios.create({
  baseURL : 'https://aquality-backend.herokuapp.com/api'
})