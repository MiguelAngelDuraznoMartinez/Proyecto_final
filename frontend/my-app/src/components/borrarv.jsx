"use client"
import axios from "axios";

export default function BorrarVenta({ id }) {
    async function borrar(e) {
        e.preventDefault(); 
        console.log("Estas en borrar venta con ID: " + id);
        
        const url = `http://localhost:3000/ventas/borrarVenta/${id}`;
        try {
            const respuesta = await axios.delete(url);
            console.log(respuesta);
            window.location.reload(); 
        } catch (error) {
            console.error("Error al borrar la venta:", error);
            alert("Error al borrar la venta. Asegúrate de que la venta existe.");
        }
    }

    return (
        <button onClick={borrar} className="btn btn-danger">
            Borrar
        </button>
    );
}
