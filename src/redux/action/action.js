import axios from "axios";
//importo los tipos de acciones
import { ADD_PERSON, ALL_LIST, DELETE_PERSON } from "./action-type";
//importo los end point para la consultas a la api
import { LIST } from "@/utils/endPoints";

export const allList = () => {

    return async (dispacth) => {
        const response = await axios.get(LIST)
        return dispacth({
            type: ALL_LIST,
            payload: response.data
        })
    }
}

export const deletePerson = (id) => {
    return {
        type: DELETE_PERSON,
        payload: id
    }
}