import axios from "@/utils/axios/index";
import { ADD } from "@/utils/endPoints";
import { addP } from "../features/registroSlice";

//esta accion hace una consulta a api/add para agregar un registro
export const addPerson = (person)=>(dispatch)=>{
    axios.post(ADD, person)
    .then(({data})=>{
        dispatch(addP(data))
    })
    .catch(error=> console.log(error))
}