"use client";

import axios from "axios";

export default function CancelarVenta({ id }) {
    async function Cancelar() {
        const url = `http://localhost:3000/ventas/cancelarVenta/${id}`;
        try {
            const respuesta = await axios.patch(url);
            console.log(respuesta);
            window.location.replace("/ventas/mostrar"); 
        } catch (error) {
            console.error("Error al cancelar la venta:", error);
        }
    }

    return (
        <button onClick={Cancelar} className="btn btn-danger">
            Cancelar
        </button>
    );
}
