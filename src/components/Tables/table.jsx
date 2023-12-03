'use client'
import React, { useState } from "react";
import Form from "../Form/edit/Form";
import { useDispatch } from "react-redux";
import { deletePersonId } from "@/ReduxToolkit/actions/deletePerson";

//este component es una tabla individual
export default function Table({ persona, i }) {
    const dispatch = useDispatch()
    // estado local para activar la ventana del formulario
    const [formActive, setFormActive] = useState(false)
    //esta funcion se encarga de eliminar un registro por id
    const handleDelete = () => {
        dispatch(deletePersonId(persona))
    }


    return (
        <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {persona.id}
            </th>
            <td className="px-6 py-4">
                {persona.nombre}
            </td>
            <td className="px-6 py-4">
                {persona.correo}
            </td>
            <td className="px-6 py-4">
                {persona.direccion}
            </td>
            <td className="px-6 py-4 text-right">
                <button onClick={() => { setFormActive(!formActive) }} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                {formActive && <Form setFormActive={setFormActive} oldPerson={persona} id={persona.id} />}
            </td>
            <td className="px-6 py-4 text-right">
                <button onClick={handleDelete} className="font-medium text-red-600 dark:text-red-500 hover:underline">Elim</button>
            </td>
        </tr>
    )
}