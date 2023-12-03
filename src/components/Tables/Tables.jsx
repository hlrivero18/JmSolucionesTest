//Declaramos este componente como uno de cliente ya que usaremos hooks como useState...
'use client'
import React, { useEffect, useState } from "react";
import axios from "../../utils/axios/index";
import PaginatedTable from "./paginated/paginated";
//importamos el end ponit
import { DELETE, PERSON } from "@/utils/endPoints";
import { useSelector, useDispatch } from "react-redux";
import { getPerson } from "@/ReduxToolkit/actions/getAllPersons";
import { deletePersonId } from "@/ReduxToolkit/actions/deletePersonByID";

export default function Tables() {
    //esta variable es una instacia de useDispatch
    const dispatch = useDispatch()
    //en estas variable se almacenaran los registros traidos desde el estado global
    const registro = useSelector(state => state.registroSlice.registro)
    

    const handleDelete = (id) => {
        
        dispatch(deletePersonId(id))
    }

    //usamos un useEffect de manera que cuando se monte el componente
    //haga un dispatch al estado global para motrar los datos en el componente
    useEffect(() => {
        dispatch(getPerson())
    }, [])
    
    return (
        <div className="relative overflow-x-auto">
            
            {/* Instanciamos el componente paginador al cual le pasamos
            el array con todos los registros a mostrar y cuantos elementos po pagina queremos */}
            <PaginatedTable data={registro} itemsPerPage={7} handleDelete={handleDelete} />
        </div>
    )
}