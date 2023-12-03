import axios from "@/utils/axios/index";
import { PERSON } from "@/utils/endPoints";
import { getPersonByID } from "../features/registroSlice";


export const getPersonId = (id)=>(dispatch)=>{
    axios.get(PERSON + id)
    .then(({data})=>{
        dispatch(getPersonByID(data))
    })
    .catch(error=> console.log(error))
}