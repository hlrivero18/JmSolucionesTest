'use client'
import React, { useEffect, useState } from 'react';
import Table from '../table';
import { ACTIVE_PAGE_STYLE, NORMAL_PAGE_STYLE } from './style';
//Este componente nos ayuda a fraccionar nuestro contenido y paginar
const PaginatedTable = ({ data, itemsPerPage }) => {
    //en este estado se almacena la pagina actual
    const [currentPage, setCurrentPage] = useState(1);
    //buscamos el numero entero mayor al resultado entre la cantidad de elementos y los elementos po pagina
    const totalPages = Math.ceil(data.length / itemsPerPage);
    //esta funcion cambia de pagina segun el valor pasado por parametro
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    //esta variable representa el indice inicial del array que sera mostrado
    const startIndex = (currentPage - 1) * itemsPerPage;
    //esta variable reprsenta el indice final del array que sera mostrado
    const endIndex = startIndex + itemsPerPage;
    //esta variable es una copia del array original solo tomando
    //el indice que empieza con startIndex y termina con endIndex
    const currentData = data.slice(startIndex, endIndex);

    //esta funcion devolvera un una fraccion html con la cantidad de hojas que hay en total
    const pageNumbers = ()=>{
        let pages = []
        for(let i = 1; i <= totalPages; i++){
            pages.push(
                //el estilo de li esta condicinando segun su valor
                <li className={i === currentPage ? ACTIVE_PAGE_STYLE : NORMAL_PAGE_STYLE}>
                  <button className='p-2' key={i} onClick={()=> handlePageChange(i)}>{i}</button>  
                </li>
            )
        }
        return pages
    }
    //cada vez que detecte un cambio en data, el componente paginador nos delvovera a la pagina 1
    useEffect(() => {
        handlePageChange(1)
    }, [data])


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
                        {/*por cada elemento en currentData se mostrara un componente Table*/}
                        return (
                            <Table persona={persona} i={i} />
                        )
                    })}
                </tbody>
            </table>

            <div >
                <nav aria-label="Page navigation example" className='p-2'>
                    <ul className="flex items-center -space-x-px h-8 text-sm justify-center">
                        <li>
                            <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}
                                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Previous</span>
                                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                </svg>
                            </button>
                        </li>
                        {
                            pageNumbers()
                        }
                        <li>
                            <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Next</span>
                                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
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