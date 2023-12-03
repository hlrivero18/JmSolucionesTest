import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    registro: [],
    allRegistro: []
}

export const registroSlice = createSlice({
    name: 'registro',
    initialState,
    reducers: {
        getAllPersons: (state, action) => {
            state.registro = action.payload
        },
        getPersonByID: (state, action)=>{
            state.registro = action.payload
        },
        deletePersonByID: (state, action)=>{
            state.registro = action.payload
        },
        editPersonByID: (state, action)=>{
            state.registro = action.payload
        }
    },

})

export const { getAllPersons, getPersonByID, deletePersonByID, editPersonByID } = registroSlice.actions

export default registroSlice.reducer