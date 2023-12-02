import axios from "axios";

const instance = axios.create(
    {
        // baseURL: 'http://localhost:3000/api'
        baseURL: 'https://jm-soluciones-test.vercel.app/api'
    }
)

export default instance