"use client";
import axios from "axios";

async function guardarProducto(e) {
    e.preventDefault();
    console.log("Estás en guardarProducto");
    const url = "http://localhost:3000/productos/nuevoProducto"; 
    const datos = {
        nombre: document.getElementById("nombre").value,
        cantidad: document.getElementById("cantidad").value,
        precio: document.getElementById("precio").value
    };

    try {
        const respuesta = await axios.post(url, datos);
        console.log(respuesta.data);
        window.location.href = "http://localhost:3001/productos/mostrar"; 
    } catch (error) {
        console.error("Error al guardar el producto:", error.response ? error.response.data : error.message);
        alert("Hubo un error al guardar el producto. Verifica la consola para más detalles.");
    }
}

export default function NuevoProducto() {
    return (
        <div className="m-0 row justify-content-center">
            <form onSubmit={guardarProducto} className="col-6 mt-5">
                <div className="card">
                    <div className="card-header">
                        <h1>Nuevo Producto</h1>
                    </div>
                    <div className="card-body">
                        <input placeholder="Nombre" className="form-control mb-3" id="nombre" autoFocus type="text" />
                        <input placeholder="Cantidad" className="form-control mb-3" id="cantidad" type="number" />
                        <input placeholder="Precio" className="form-control mb-3" id="precio" type="number" />
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary col-12">Guardar nuevo producto</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
