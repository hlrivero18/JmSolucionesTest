//importamos el archivo db.js donde estan nuestros registros para eliminar un registro
const registros = require('../../../../utils/DB/db')

export default function handlerDelete(req, res) {
    //Verificamos si el metodo ingresado es el correcto
    if (req.method === 'DELETE') {
        //Obtemos el ID desde query
        const { id } = req.query

        if (id) {
            //filtramos el registro para eliminar el id que obtuvimos en query
            const newRegistro = registros.filter(p => p.id !== id)
            res.status(200).json(newRegistro)
        }
    } else {
        res.status(404).json({ error: 'metodo invalido' })
    }
}