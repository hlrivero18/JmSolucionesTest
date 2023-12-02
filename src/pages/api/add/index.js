//importamos el archivo db.js donde estan nuestros registros para añadir un registro
const registros = require('../../../utils/DB/db')

export default function handlerDelete(req, res) {
    //Verificamos si el metodo ingresado es el correcto
    if (req.method === 'POST') {
        //Obtemos el nuevo registro por body
        //y lo convertimos de JSON a un dato JS
        const newPerson = JSON.parse(req.body)
        //lo guardamos al principio de nuestro array
        registros.unshift(newPerson)

        res.status(200).json(registros)
    } else {
        res.status(405).json({ error: 'metodo invalido' })
    }
}