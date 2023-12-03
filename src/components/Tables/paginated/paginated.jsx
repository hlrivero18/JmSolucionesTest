'use client'

import React, { useEffect, useState } from 'react';
import Table from '../table';
import { useSelector } from 'react-redux';
import { ACTIVE_PAGE_STYLE, NORMAL_PAGE_STYLE } from './style';

const PaginatedTable = ({ data, itemsPerPage, handleDelete }) => {
    const { registro } = useSelector(state => state.registroSlice)
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    const numerosDePagina = ()=>{
        let paginas = []
        for(let i = 1; i <= totalPages; i++){
            paginas.push(
                <li className={i === currentPage ? ACTIVE_PAGE_STYLE : NORMAL_PAGE_STYLE}>
                  <button key={i} onClick={()=> handlePageChange(i)}>{i}</button>  
                </li>
            )
        }
        return paginas
    }

    useEffect(() => {
        handlePageChange(1)
    }, [registro])


    return (
        <div>
            <table className="m-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Correo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Direccion
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Elim</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* hacemos un mapeo del array con los datos obtenidos desde currentData
                      y los mostramos en la tabla */}
                    {currentData.map((persona, i) => {
                        return (
                            <Table persona={persona} i={i} handleDelete={handleDelete} />
                        )
                    })}
                </tbody>
            </table>

            <div >
                {/* Controles de navegación de página */}
                {/* <button
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    Anterior
                </button>
                <span>Página {currentPage} de {totalPages}</span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    Siguiente
                </button> */}


                <nav aria-label="Page navigation example" className='p-2'>
                    <ul class="flex items-center -space-x-px h-8 text-sm justify-center">
                        <li>
                            <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}
                                class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span class="sr-only">Previous</span>
                                <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                </svg>
                            </button>
                        </li>
                        {
                            numerosDePagina()
                        }
                        <li>
                            <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}
                                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span class="sr-only">Next</span>
                                <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    );
};

export default PaginatedTable