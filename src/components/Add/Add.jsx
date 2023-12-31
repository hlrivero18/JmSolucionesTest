'use client'
//este componente es el boton que esta abajo a la derecha que nos permitira acceder al formulario
import React from "react";
import { useState } from "react";
import Form from "../Form/add/Form";

export default function Add() {
    const [formActive, setFormActive] = useState(false)

    //esta funcion permitira mostrar el formulario en forma de ventana emergente al darle click en el boton "+"
    function handleclick() {
        setFormActive(!formActive)
        console.log(formActive)
    }
    return (
        <>
            <button onClick={handleclick} className="rounded-full text-2xl p-3 z-50 bg-green-500 text-white fixed bottom-[50px] right-[40px]">
                +
            </button>
            {formActive && <Form setFormActive={setFormActive}/>}
            
        </>

    )
}