import axios from "@/utils/axios/index";
import { DELETE } from "@/utils/endPoints";
import { deletePersonByID } from "../features/registroSlice";


export const deletePersonId = (id)=>(dispatch)=>{
    axios.delete(DELETE + id)
    .then(({data})=>{
        dispatch(deletePersonByID(data))
    })
    .catch(error=> console.log(error))
}