//importamos el archivo db.js donde estan nuestros registros para ser filtrados
const registros = require('../../../utils/DB/db')

export default function handlerParams(req, res) {
    //Verificamos si el metodo ingresado es el correcto
    if (req.method === 'GET') {

        res.status(200).json(registros)
        
    }else{
        res.status(404).json({ error: 'metodo invalido' })
    }

}