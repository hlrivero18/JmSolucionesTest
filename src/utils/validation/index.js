/*esta funcion se encarga de validar que los datos que se estan escribiendo
por el formulario sean validos para enviar a la api*/
export default function validation(person){
    const error = {}
    const nombre = (person.nombre.length > 0) 
    const correo = (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(person.correo));
    const direccion = (person.direccion.length > 0)

    if(!nombre){
        error['nombre'] = 'este dato no puede estar vacio'
    }
    if(!direccion){
        error['direccion'] = 'este dato no puede estar vacio'
    }
    if(!correo){
        error['correo'] = 'este correo no es valido'
    }
    //retornamos el objeto error con los errores que segun la funcion haya
    return error
}