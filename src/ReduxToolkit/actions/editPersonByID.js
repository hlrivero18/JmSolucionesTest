import axios from "@/utils/axios/index";
import { EDIT } from "@/utils/endPoints";
import { editPersonByID } from "../features/registroSlice";


export const editPersonId = (id, person)=>(dispatch)=>{
    axios.put(EDIT + id, person)
    .then(({data})=>{
        dispatch(editPersonByID(data))
    })
    .catch(error=> console.log(error))
}