import { deletePersonByID } from "../features/registroSlice";

//esta accion recibe un objeto el cual es eliminado en el Slice
export const deletePersonId = (person)=>(dispatch)=>{
    dispatch(deletePersonByID(person))
}