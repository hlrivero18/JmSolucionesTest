//importamos el archivo db.js donde estan nuestros registros para ser filtrados
const registros = require('../../../../utils/DB/db')

export default function handlerParams(req, res) {
    //Verificamos si el metodo ingresado es el correcto
    if (req.method === 'GET') {
        //Obtenemos el id desde query
        const { id } = req.query

        //Si el id es positivo procedemos a buscarlo en nuestro registro, de lo contrario retornamos un error
        if (id) {
            const filtrado = registros.filter(p => p.id.startsWith(id))
            
            res.status(200).json(filtrado)
        } else {
            res.status(404).json({ error: 'no se encontro ningun parametro' })
        }
    }else{
        res.status(404).json({ error: 'metodo invalido' })
    }

}