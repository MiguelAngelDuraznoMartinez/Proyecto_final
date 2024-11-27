import Link from 'next/link';
import BorrarVenta from "@/components/borrarv";
import axios from "axios";
import CancelarVenta from '@/components/cancelar';

async function getVentasConDetalles() {
    const ventasUrl = "http://localhost:3000/ventas";
    const productosUrl = "http://localhost:3000/productos";
    const usuariosUrl = "http://localhost:3000/usuarios";

    const ventas = await axios.get(ventasUrl);
    const productos = await axios.get(productosUrl);
    const usuarios = await axios.get(usuariosUrl);

    const productosMap = Object.fromEntries(productos.data.map(p => [p.id, { nombre: p.nombre, precio: p.precio }]));
    const usuariosMap = Object.fromEntries(usuarios.data.map(u => [u.id, u.nombre]));

    return ventas.data.map(venta => ({
        ...venta,
        nombreProducto: productosMap[venta.idProducto]?.nombre,
        precioProducto: productosMap[venta.idProducto]?.precio,
        nombreUsuario: usuariosMap[venta.idUsuario],
    }));
}

export default async function Ventas() {
    const ventas = await getVentasConDetalles();
    return (
        <>
            <h1>Ventas</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cantidad</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Usuario</th>
                        <th>Status</th>
                        <th>Cancelar</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ventas.map((venta, i) => (
                            <tr key={i}>
                                <td>{venta.id}</td>
                                <td>{venta.cantidad}</td>
                                <td>{venta.fecha}</td>
                                <td>{venta.hora}</td>
                                <td>{venta.nombreProducto}</td>
                                <td>${venta.precioProducto}</td>
                                <td>{venta.nombreUsuario}</td>
                                <td>{venta.status}</td>
                                <td>
                                    <CancelarVenta id={venta.id} />
                                </td>
                                <td>
                                    <Link href={`/ventas/editar/${venta.id}`}>
                                        <button>Editar</button>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}
