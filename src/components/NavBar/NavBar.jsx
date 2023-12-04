'use client'
import React from "react";
import { useSelector } from "react-redux";
import style from './Navbar.module.css';
//componente NavBar
export default function NavBar() {
    const registro = useSelector(state => state.registroSlice.registro)
    return (
        <nav className="z-50 h-16 dark:bg-gray-900 text-white grid content-center border-b-4 border-b-blue-600">
            <div className="flex justify-around">
                <h1 className={`${style.sub} text-black dark:text-white uppercase font-bold`}>Registros: {registro.length}</h1>
                <h1 className={`${style.sub} text-black dark:text-white uppercase font-bold`}>Tabla de Registro</h1>
                <a href="https://web-portafolio-hlrivero18.vercel.app/" target="_blank" className={`${style.sub} text-black dark:text-white uppercase font-bold`}>About me</a>
            </div>


        </nav>
    )
}