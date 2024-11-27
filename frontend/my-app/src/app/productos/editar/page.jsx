"use client";
import axios from "axios";

async function modificarProducto(e) {
    e.preventDefault();
    console.log("Estas en modificarProducto");
    
    const productoId = document.getElementById("productoId").value;
    const url = `http://localhost:3000/productos/modificarProducto/${productoId}`; 
    const datos = {
        nombre: document.getElementById("nombre").value,
        categoria: document.getElementById("categoria").value,
        precio: document.getElementById("precio").value
    };

    try {
        const respuesta = await axios.put(url, datos); 
        console.log(respuesta.data);
        
        window.location.href = "http://localhost:3001/productos/mostrar"; 
    } catch (error) {
        console.error("Error al modificar el producto:", error);
        alert("Hubo un error al modificar el producto. Inténtalo de nuevo.");
    }
}

export default function ModificarProducto() {
    return (
        <div className="m-0 row justify-content-center">
            <form onSubmit={modificarProducto} className="col-6 mt-5" action="" method="post">
                <div className="card">
                    <div className="card-header">
                        <h1>Modificar producto</h1>
                    </div>
                    <div className="card-body">
                        <input placeholder="ID del producto" className="form-control mb-3" id="productoId" autoFocus type="text" required></input>
                        <input placeholder="Nombre" className="form-control mb-3" id="nombre" type="text" required></input>
                        <input placeholder="Categoría" className="form-control mb-3" id="categoria" type="text" required></input>
                        <input placeholder="Precio" className="form-control mb-3" id="precio" type="number" required></input>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary col-12">Modificar producto</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
