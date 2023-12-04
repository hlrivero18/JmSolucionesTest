//Declaramos este componente como uno de cliente ya que usaremos hooks como useState...
'use client'
import React, { useEffect, useState } from "react";
import PaginatedTable from "./paginated/paginated";
//importamos el end ponit
import { useSelector, useDispatch } from "react-redux";
import { getPerson } from "@/ReduxToolkit/actions/getAllPersons";

export default function Tables() {
    const [loading, setLoading] = useState(true)
    //esta variable es una instacia de useDispatch
    const dispatch = useDispatch()
    //en estas variable se almacenaran los registros traidos desde el estado global
    const registro = useSelector(state => state.registroSlice.registro)

    //usamos un useEffect de manera que cuando se monte el componente
    //haga un dispatch al estado global para motrar los datos en el componente
    useEffect(() => {
        dispatch(getPerson())
        setLoading(false)
    }, [])

    return (
        <div className="relative overflow-x-auto">
            {/* Instanciamos el componente paginador al cual le pasamos
            el array con todos los registros a mostrar y cuantos elementos por pagina queremos */}
            {loading ?
                <div className="mt-8 h-48 w-64 bg-blue-500 m-auto rounded-lg grid place-content-center">
                    <h1 className="m-auto text-white">Cargando...</h1>
                </div>
                :
                registro.length > 0 ?
                    <PaginatedTable data={registro} itemsPerPage={7} />
                    :
                    <div className="mt-8 h-48 w-64 bg-blue-500 m-auto rounded-lg grid place-content-center">
                        <h1 className="m-auto text-white">No hay registros con ese id</h1>
                    </div>
            }

        </div>
    )
}