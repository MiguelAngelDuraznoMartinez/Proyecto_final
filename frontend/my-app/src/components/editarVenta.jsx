import EditarVenta from "./EditarVenta";

export default function Ventas() {
    const [ventaId, setVentaId] = useState(null);

    const editarVenta = (id) => {
        setVentaId(id);
    };

    return (
        <div>
            <h1>Listado de Ventas</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Producto</th>
                        <th>Usuario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map((venta) => (
                        <tr key={venta.id}>
                            <td>{venta.id}</td>
                            <td>{venta.productoNombre}</td>
                            <td>{venta.usuarioNombre}</td>
                            <td>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => editarVenta(venta.id)}
                                >
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {ventaId && <EditarVenta id={ventaId} />}
        </div>
    );
}
