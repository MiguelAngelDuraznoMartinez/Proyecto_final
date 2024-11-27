"use client"
import axios from "axios";
import { useState, useEffect } from "react";

async function guardarVenta(e, idProductoSeleccionado, idUsuarioSeleccionado) {
    e.preventDefault();

    const url = "http://localhost:3000/ventas/nuevaVenta";
    const datos = {
        cantidad: parseInt(document.getElementById("cantidad").value),
        fecha: document.getElementById("fecha").value,
        hora: document.getElementById("hora").value,
        idProducto: idProductoSeleccionado,
        idUsuario: idUsuarioSeleccionado,
    };

    try {
        const respuesta = await axios.post(url, datos);
        console.log(respuesta.data);

        window.location.href = "http://localhost:3001/ventas/mostrar";
    } catch (error) {
        console.error("Error al guardar la venta:", error);
    }
}

export default function NuevaVenta() {
    const [productos, setProductos] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [productoNombre, setProductoNombre] = useState("");
    const [usuarioNombre, setUsuarioNombre] = useState("");
    const [idProductoSeleccionado, setIdProductoSeleccionado] = useState(null);
    const [idUsuarioSeleccionado, setIdUsuarioSeleccionado] = useState(null);
    const [productoSugerencias, setProductoSugerencias] = useState([]);
    const [usuarioSugerencias, setUsuarioSugerencias] = useState([]);

    useEffect(() => {
        async function cargarDatos() {
            try {
                const productosRes = await axios.get("http://localhost:3000/productos");
                const usuariosRes = await axios.get("http://localhost:3000/usuarios");
                setProductos(productosRes.data);
                setUsuarios(usuariosRes.data);
            } catch (error) {
                console.error("Error al cargar datos:", error);
            }
        }
        cargarDatos();
    }, []);

    const filtrarProductos = (texto) => {
        setProductoNombre(texto);
        if (texto.length > 0) {
            const productosFiltrados = productos.filter(producto =>
                producto.nombre.toLowerCase().includes(texto.toLowerCase())
            );
            setProductoSugerencias(productosFiltrados);
        } else {
            setProductoSugerencias([]);
        }
    };

    const filtrarUsuarios = (texto) => {
        setUsuarioNombre(texto);
        if (texto.length > 0) {
            const usuariosFiltrados = usuarios.filter(usuario =>
                usuario.nombre.toLowerCase().includes(texto.toLowerCase())
            );
            setUsuarioSugerencias(usuariosFiltrados);
        } else {
            setUsuarioSugerencias([]);
        }
    };

    const seleccionarProducto = (producto) => {
        setProductoNombre(producto.nombre);
        setIdProductoSeleccionado(producto.id);
        setProductoSugerencias([]); 
    };

    const seleccionarUsuario = (usuario) => {
        setUsuarioNombre(usuario.nombre);
        setIdUsuarioSeleccionado(usuario.id);
        setUsuarioSugerencias([]); 
    };

    return (
        <div className="m-0 row justify-content-center">
            <form onSubmit={(e) => guardarVenta(e, idProductoSeleccionado, idUsuarioSeleccionado)} className="col-6 mt-5">
                <div className="card">
                    <div className="card-header">
                        <h1>Nueva Venta</h1>
                    </div>
                    <div className="card-body">
                        <input placeholder="Cantidad" className="form-control mb-3" id="cantidad" type="number" min="1" required />
                        <input placeholder="Fecha" className="form-control mb-3" id="fecha" type="date" required />
                        <input placeholder="Hora" className="form-control mb-3" id="hora" type="time" required />

                        {}
                        <input
                            placeholder="Nombre del Producto"
                            className="form-control mb-3"
                            type="text"
                            value={productoNombre}
                            onChange={(e) => filtrarProductos(e.target.value)}
                            required
                        />
                        {}
                        {productoSugerencias.length > 0 && (
                            <ul className="list-group mb-3">
                                {productoSugerencias.map((producto) => (
                                    <li
                                        key={producto.id}
                                        className="list-group-item"
                                        onClick={() => seleccionarProducto(producto)}
                                    >
                                        {producto.nombre}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {}
                        <input
                            placeholder="Nombre del Usuario"
                            className="form-control mb-3"
                            type="text"
                            value={usuarioNombre}
                            onChange={(e) => filtrarUsuarios(e.target.value)}
                            required
                        />
                        {}
                        {usuarioSugerencias.length > 0 && (
                            <ul className="list-group mb-3">
                                {usuarioSugerencias.map((usuario) => (
                                    <li
                                        key={usuario.id}
                                        className="list-group-item"
                                        onClick={() => seleccionarUsuario(usuario)}
                                    >
                                        {usuario.nombre}
                                    </li>
                                ))}
                            </ul>
                        )}

                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary col-12">Guardar nueva venta</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
