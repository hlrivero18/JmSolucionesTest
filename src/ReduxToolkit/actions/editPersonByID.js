import { editPersonByID } from "../features/registroSlice";
//esta accion recibe un objeto y lo envia al Slice para ser editado
export const editPersonId = (person)=>(dispatch)=>{
        dispatch(editPersonByID(person))
}