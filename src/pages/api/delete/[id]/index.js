//importamos el archivo db.js donde estan nuestros registros para eliminar un registro
let registros = require('../../../../utils/DB/db')

export default function handlerDelete(req, res) {
    //Verificamos si el metodo ingresado es el correcto
    if (req.method === 'DELETE') {
        //Obtemos el ID desde query
        const { id } = req.query

        if (id) {
            const eliminado = registros.find(p => p.id === id)
            //filtramos el registro para eliminar el id que obtuvimos en query
            registros = registros.filter(p => p.id !== id)
            //retornamos el registro eliminado para identificarlo y sacarlo en el redux
            res.status(200).json(eliminado)
        }
    } else {
        res.status(404).json({ error: 'metodo invalido' })
    }
}