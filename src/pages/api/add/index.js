//importamos el archivo db.js donde estan nuestros registros para añadir un registro
const registros = require('../../../utils/DB/db')

export default function handlerDelete(req, res) {
    //Verificamos si el metodo ingresado es el correcto
    if (req.method === 'POST') {
        //Obtemos el nuevo registro por body
        const body = req.body
        //verificamos que los datos traidos de body sean un objeto
        if (typeof body === 'object') {
            //destructuramos nuestro body
            const { nombre, correo, direccion } = body
            //verificamos que los datos esten completos y de no ser asi, retornar un error
            if (!nombre || !correo || !direccion) {
                res.status(405).json('Faltan datos')
            }
            //en caso que los datos esten completos
            //lo guardamos al principio de nuestro array y le agregamos un id
            const newPerson = { id: `${registros.length + 1}`, ...body }
            registros.unshift(newPerson)
            //retornamos el nuevo registro para ser agregado al redux
            res.status(200).json(newPerson)
        }
    } else {
        res.status(405).json({ error: 'metodo invalido' })
    }
}