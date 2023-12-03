import axios from "@/utils/axios/index";
import { ADD } from "@/utils/endPoints";
import { getAllPersons } from "../features/registroSlice";


export const addPerson = (person)=>(dispatch)=>{
    axios.post(ADD, person)
    .then(({data})=>{
        dispatch(getAllPersons(data))
    })
    .catch(error=> console.log(error))
}