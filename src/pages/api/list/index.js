//importamos el archivo db.js donde estan nuestros registros para ser mostrados en la api
const registros = require('../../../utils/DB/db')

//Exportamos una funcion que nos permitira ver los registros
//en nuestro front al ser consultada la ruta "/api/list".
export default function handler(req, res) {
  if(req.method === 'GET'){
    res.status(200).json(registros)
  }else{
    res.status(400).json({error: 'metodo invalido'})
  }
  
}