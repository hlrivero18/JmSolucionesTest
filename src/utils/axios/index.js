/*con este archivo logramos crear una URL base para consultar
nuestra api 'localhost' para nuestro entorno de desarrollo
 y 'jm-soluciones-test para el entorno de produccion'*/
import axios from "axios";

const instance = axios.create(
    {
        baseURL: 'http://localhost:3002/api'
        // baseURL: 'https://jm-soluciones-test.vercel.app/api'
    }
)

export default instance