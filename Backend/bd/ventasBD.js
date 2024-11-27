const ventasBD = require("./conexion").ventas; 
const Venta = require("../clases/VentaClase"); 

function validarDatos(venta) {
    let datosCorrectos = true;


    if (!Number.isInteger(venta.cantidad) || venta.cantidad <= 0) {
        datosCorrectos = false;
    }

    const fechaRegex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD
    if (!fechaRegex.test(venta.fecha)) {
        datosCorrectos = false;
    }

    
    const horaRegex = /^([01]\d|2[0-3]):([0-5]\d)$/; // HH:MM
    if (!horaRegex.test(venta.hora)) {
        datosCorrectos = false;
    }

    
    if (!venta.idProducto || !venta.idUsuario) {
        datosCorrectos = false;
    }

    
    const estadosValidos = ['vendido', 'cancelado'];
    if (!estadosValidos.includes(venta.status)) {
        datosCorrectos = false;
    }

    return datosCorrectos;
}

async function mostrarVentas(req, res) {
    const ventas = await ventasBD.get();
    let ventasValidas = [];
    ventas.forEach(venta => {
        const venta1 = new Venta({ id: venta.id, ...venta.data() });
        const venta2 = venta1.getVenta;
        if (validarDatos(venta2)) {
            ventasValidas.push(venta2);
        }
    });
    return ventasValidas;
}

async function buscarPorId(id) {
    const venta = await ventasBD.doc(id).get();
    const venta1 = new Venta({ id: venta.id, ...venta.data() });
    let ventaValida = { error: true };
    if (validarDatos(venta1.getVenta)) {
        ventaValida = venta1.getVenta;
    }
    return ventaValida;
}

async function nuevaVenta(data) {
    const venta1 = new Venta(data);
    let ventaValida = false;
    if (validarDatos(venta1.getVenta)) {
        await ventasBD.doc().set(venta1.getVenta);
        ventaValida = true;
    }
    return ventaValida;
}

async function cancelarVenta(id) {
    const venta = buscarPorId(id);
    var cancelada=false;
    if(venta.error!=true){
        await ventasBD.doc(id).update({ status: "Cancelada" });
        cancelada=true;
    }
    return cancelada;
}

async function borrarVenta(id) {
    const venta = await buscarPorId(id);
    let borrado = false; 
    if (venta.error !== true) {
        await ventasBD.doc(id).delete();
        borrado = true;
    }
    return borrado;
}

async function modificarVenta(id, data) {
    const venta = await buscarPorId(id);
    let editada = false;

    if (venta.error != true) {
        const ventaActualizada = {
            idUsuario: data.idUsuario || venta.idUsuario,
            idProducto: data.idProducto || venta.idProducto,
            fecha: data.fecha || venta.fecha,
            hora: data.hora || venta.hora,
            estatus: data.estatus || venta.estatus,
        };
        
        await ventasBD.doc(id).update(ventaActualizada);
        editada = true;
    }

    return editada;
}

module.exports = {
    mostrarVentas,
    nuevaVenta,
    borrarVenta,
    buscarPorId, 
    modificarVenta,
    cancelarVenta
}