import axios from 'axios'

const dogApi = axios.create({
    baseURL: 'https://dog.ceo/api/breeds'
})

export default dogApi