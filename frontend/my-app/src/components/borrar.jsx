"use client"
import Link from "next/link";
import axios from "axios";

export default function BorrarUsuario({id}){
    async function borrar() {
        console.log("Estas en borrar" + id);
        const url="http://localhost:3000/usuarios/borrarUsuario/" + id;
        const respuesta = await axios.delete(url);
        console.log(respuesta);
        window.location.replace("/usuarios/mostrar")

    }
    return (
        <button onClick={borrar} className="btn btn-danger">
            Borrar
        </button>
    );
}




