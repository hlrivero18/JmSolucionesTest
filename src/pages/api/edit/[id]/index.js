//importamos el archivo db.js donde estan nuestros registros para ser filtrados
const registros = require('../../../../utils/DB/db')

export default function handlerEdit(req, res) {
    //Verificamos si el metodo ingresado es el correcto
    if (req.method === 'PUT') {
        //Obtenemos el id desde query
        const { id } = req.query
        //Obtenemos el objeto por body
        const body = req.body
        //Si el id es positivo procedemos a buscarlo en nuestro registro, de lo contrario retornamos un error
        if (id) {
            //Obtenemos el indice del registro segun su id
            const index = registros.findIndex(person => person.id === id)
            //una vez procesado verificamos si el index fue mayor a 1
            if (index !== -1) {
                // luego reemplazamos el registro que queremos editar con el nuevo y retornamos
                registros[index] = { id, ...body }
                res.status(200).json(registros)
            }else {
                res.status(404).json({ error: 'No se encontró ningún registro con el ID proporcionado' });
            }
        } else {
            res.status(404).json({ error: 'no se encontro ningun parametro' })
        }
    } else {
        res.status(404).json({ error: 'metodo invalido' })
    }

}