"use client"
import axios from "axios";

export default function BorrarProducto({ id }) {
    async function borrar(e) {
        e.preventDefault(); // Evita que la página se recargue
        console.log("Estas en borrar producto con ID: " + id);
        
        const url = `http://localhost:3000/productos/borrarProducto/${id}`; // URL correcta
        try {
            const respuesta = await axios.delete(url);
            console.log(respuesta);
            // Redirigir o refrescar la lista de productos
            window.location.reload(); // Recargar la página para reflejar los cambios
        } catch (error) {
            console.error("Error al borrar el producto:", error);
            alert("Error al borrar el producto. Asegúrate de que el producto existe.");
        }
    }

    return (
        <button onClick={borrar} className="btn btn-danger">
            Borrar
        </button>
    );
}
