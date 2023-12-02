import { ADD_PERSON, ALL_LIST, DELETE_PERSON } from "../action/action-type";

const initialState = {
    registro: [],
    allRegistro: [],
}

const rootReducer = (state = initialState, action) =>{
    const {type, payload} = action
    switch(type) {
        case ALL_LIST:
            return {...state, registro: payload, allRegistro: payload}
        case DELETE_PERSON:
            return {state, registro: payload, allRegistro: payload}
    }
}

export default rootReducer