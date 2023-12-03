'use client'
import React, { useState } from "react";
import validation from "@/utils/validation";
import { editPersonId } from "@/ReduxToolkit/actions/editPersonByID";
import { useDispatch } from "react-redux";

export default function Form({ setFormActive, oldPerson, id }) {
    //en este estado se ira almacenando todo lo que se vaya escribriendo en el formulario
    const [person, setPerson] = useState({
        nombre: oldPerson.nombre,
        correo: oldPerson.correo,
        direccion: oldPerson.direccion
    })

    const [error, setError] = useState({})

    const dispath = useDispatch()
    //esta funcion se encargara de detectar los cambios del formulario
    //y almacenarlos en el estado local.
    const handleChange = (e) => {
        const { value, name } = e.target;
        const newPerson = { ...person, [name]: value }
        setPerson(newPerson)
        setError(validation(newPerson))
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (Object.keys(error).length === 0) {
            dispath(editPersonId(id, person))
            setFormActive()
        }else{
            setError({...error, msj: 'Faltan datos'})
        }

    }

    return (
        <div className="z-50 fixed top-0 left-0 w-full h-screen bg-black bg-opacity-75 grid place-items-center">
           
            <form onSubmit={handleClick} className="w-96 max-w-md mx-auto h-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90  items-center z-50 rounded-lg border border-black p-7 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white">
                <button onClick={() => { setFormActive() }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto grid justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="nombre"
                        value={person.nombre} onChange={handleChange}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Nombre y Apellido " required />
                        {error.nombre && <span className="text-xs text-red-500 block mt-1">{error.nombre}</span>}
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="email" name="correo"
                        value={person.correo} onChange={handleChange}
                        id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Email " required />
                        {error.correo && <span className="text-xs text-red-500 block mt-1">{error.correo}</span>}
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="direccion"
                        value={person.direccion} onChange={handleChange}
                        id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Direccion" required />
                        {error.direccion && <span className="text-xs text-red-500 block mt-1">{error.direccion}</span>}
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar</button>
            </form>
        </div>


    )
}