"use client";
import axios from "axios";

async function modificarUsuario(e) {
    e.preventDefault();
    console.log("Estas en modificarUsuario");
    
    const userId = document.getElementById("userId").value;
    const url = `http://localhost:3000/usuarios/modificarUsuario/${userId}`; 
    const datos = {
        nombre: document.getElementById("nombre").value,
        usuario: document.getElementById("usuario").value,
        password: document.getElementById("password").value
    };

    try {
        const respuesta = await axios.put(url, datos); 
        console.log(respuesta.data);
        
        window.location.href = "http://localhost:3001/usuarios/mostrar"; 
    } catch (error) {
        console.error("Error al modificar el usuario:", error);
        alert("Hubo un error al modificar el usuario. Inténtalo de nuevo.");
    }
}

export default function ModificarUsuario() {
    return (
        <div className="m-0 row justify-content-center">
            <form onSubmit={modificarUsuario} className="col-6 mt-5" action="" method="post">
                <div className="card">
                    <div className="card-header">
                        <h1>Modificar usuario</h1>
                    </div>
                    <div className="card-body">
                        <input placeholder="ID del usuario" className="form-control mb-3" id="userId" autoFocus type="text" required></input>
                        <input placeholder="Nombre" className="form-control mb-3" id="nombre" type="text" required></input>
                        <input placeholder="Usuario" className="form-control mb-3" id="usuario" type="text" required></input>
                        <input placeholder="Password" className="form-control mb-3" id="password" type="password" required></input>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary col-12">Modificar usuario</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
