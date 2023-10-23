import axios from 'axios'


export default axios.create({
  baseURL : 'http://aqualiot.adb7cxh0cxhtgcdy.westus.azurecontainer.io:4000/api'
})