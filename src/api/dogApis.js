import axios from 'axios'

const dogApis = axios.create({
    baseURL: 'https://dog.ceo/api/breed'
})

export default dogApis