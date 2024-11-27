import BorrarProducto from "@/components/borrarp"; 
import axios from "axios";
import Link from "next/link";
async function getProductos() {
    const url = "http://localhost:3000/productos"; 
    const response = await axios.get(url);
    return response.data;
}

export default async function Productos() {
    const productos = await getProductos();
    return (
        <>
            <h1>Productos</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((productos) => (
                        <tr key={productos.id}> {}
                            <td>{productos.id}</td>
                            <td>{productos.nombre}</td>  
                            <td>{productos.cantidad}</td>
                            <td>{productos.precio}</td>
                            <td>
                                <BorrarProducto id={productos.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
