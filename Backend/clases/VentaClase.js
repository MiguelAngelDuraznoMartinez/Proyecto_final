    class Venta {
    constructor(data) {
        this.id = data.id; 
        this.cantidad = data.cantidad;
        this.fecha = data.fecha;
        this.hora = data.hora;
        this.idProducto = data.idProducto;
        this.idUsuario = data.idUsuario;
        this.status = data.status || 'vendido'; 
    }

    // Setters
    set id(id) {
        this._id = id;
    }

    set cantidad(cantidad) {
        if (Number.isInteger(cantidad) && cantidad > 0) {
            this._cantidad = cantidad;
        } else {
            throw new Error("Cantidad inválida.");
        }
    }

    set fecha(fecha) {
        const fechaRegex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD
        if (fechaRegex.test(fecha)) {
            this._fecha = fecha;
        } else {
            throw new Error("Fecha inválida.");
        }
    }

    set hora(hora) {
        const horaRegex = /^([01]\d|2[0-3]):([0-5]\d)$/; // HH:MM
        if (horaRegex.test(hora)) {
            this._hora = hora;
        } else {
            throw new Error("Hora inválida.");
        }
    }

    set idProducto(idProducto) {
        this._idProducto = idProducto; 
    }

    set idUsuario(idUsuario) {
        this._idUsuario = idUsuario; 
    }

    set status(status) {
        this._status = status; // Sin validación
    }

    // Getters
    get id() {
        return this._id;
    }

    get cantidad() {
        return this._cantidad;
    }

    get fecha() {
        return this._fecha;
    }

    get hora() {
        return this._hora;
    }

    get idProducto() {
        return this._idProducto;
    }

    get idUsuario() {
        return this._idUsuario;
    }

    get status() {
        return this._status;
    }

    get getVenta() {
        const conid = {
            id: this._id,
            cantidad: this._cantidad,
            fecha: this._fecha,
            hora: this._hora,
            idProducto: this._idProducto,
            idUsuario: this._idUsuario,
            status: this._status
        };
        const sinid = {
            cantidad: this._cantidad,
            fecha: this._fecha,
            hora: this._hora,
            idProducto: this._idProducto,
            idUsuario: this._idUsuario,
            status: this._status
        };
        return this.id !== undefined ? conid : sinid;
    }
}

module.exports = Venta;
