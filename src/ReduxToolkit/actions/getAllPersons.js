import axios from "@/utils/axios/index";
import { PERSON } from "@/utils/endPoints";
import { getAllPersons } from "../features/registroSlice";

//esta accion hace una consulta a api/person y envia esos datos al Slice
export const getPerson = ()=>(dispatch)=>{
    axios.get(PERSON)
    .then(({data})=>{
        dispatch(getAllPersons(data))
    })
    .catch(error=> console.log(error))
}