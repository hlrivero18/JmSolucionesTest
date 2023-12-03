'use client'
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPersonId } from "@/ReduxToolkit/actions/getPersonByID";

export default function Search() {

    const [id, setId] = useState('')
    const dispatch = useDispatch()

    const handlerchange = (e) => {
        const { value } = e.target
        setId(value)
    }
   
    useEffect(() => {
        dispatch(getPersonId(id))
    }, [id])

    return (
        <form className="m-auto mb-3 w-96">
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" id="default-search" value={id} onChange={handlerchange} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busqueda por ID" required />
            </div>
        </form>
    )
}