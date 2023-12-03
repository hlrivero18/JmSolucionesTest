import { searchPerson } from "../features/registroSlice";
//esta accion recibe un id para hace una busqueda en el Slice
export const searchPersonByID = (id) => (dispatch) => {
    dispatch(searchPerson(id))
}