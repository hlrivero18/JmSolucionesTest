import { createSlice } from '@reduxjs/toolkit'
//declaramos un estado initial para cada vez que inicie la aplicacion
//con un estado respaldo para ser restituido 
const initialState = {
    registro: [],
    allRegistro: []
}
//configuramos el reducer con las acciones a tomar cada vez que se dispatchen
export const registroSlice = createSlice({
    name: 'registro',
    initialState,
    reducers: {
        //se reciben los datos y se guardan en el estado global
        getAllPersons: (state, action) => {
            state.registro = action.payload
            state.allRegistro = action.payload
        },
        //se recibe un objeto al cual se le saca por su id del registro
        deletePersonByID: (state, action) => {
            state.registro = state.registro.filter(p => p.id !== action.payload.id)
            state.allRegistro = state.registro
        },
        //se recibe un objeto editado y se le reemplaza a su equivalente en el registro
        editPersonByID: (state, action) => {
            state.registro = state.registro.map((p) => {
                if (p.id === action.payload.id) {
                    return p = action.payload
                } else {
                    return p
                }
            })
            state.allRegistro = state.registro
        },
        //se agrega un objeto nuevo al registro
        addP: (state, action) => {
            state.registro = [action.payload, ...state.registro]
            state.allRegistro = state.registro
        },
        //se busca un registro y en caso de no enviar un id se restituye el registro con allRegistro
        searchPerson: (state, action) => {
            console.log(action.payload.length > 0)
            if (action.payload.length > 0) {
                state.registro = state.registro.filter(p => p.id.startsWith(action.payload))
            } else {
                state.registro = state.allRegistro
            }
        }
    },

})

export const { getAllPersons, deletePersonByID, editPersonByID, addP, searchPerson } = registroSlice.actions

export default registroSlice.reducer