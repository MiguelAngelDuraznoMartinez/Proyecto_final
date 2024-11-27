class Productos{
    constructor(data){
        //console.log(data);
        this.id=data.id;
        this.nombre=data.nombre;
        this.precio=data.precio;
        this.cantidad=data.cantidad;
    }

    set id(id){
        this._id=id;
    }
    
    set nombre(nombre){
        const nombreRegex = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if (nombreRegex.test(nombre)) {
            this._nombre = nombre;
        }
    }


    set cantidad(cantidad){
        this._cantidad=cantidad;
    }

    set precio(precio){
        this._precio=precio;
    }

    get id(){
        return this._id;
    }

    get nombre(){
        return this._nombre;
    }


    get cantidad(){
        return this._cantidad;
    }

    get precio(){
        return this._precio;
    }


    get getProducto(){
        const conid={
            id:this._id,
            nombre:this._nombre,
            cantidad:this._cantidad,
            precio:this._precio,
            
    }
    const sinid={
        nombre:this._nombre,
        cantidad:this._cantidad,
        precio:this._precio,
    }
    if(this.id!=undefined){
        return conid;
    }else{
        return sinid;
    }
    }

}

module.exports=Productos;

/*var data={
    nombre:"Ludwing Van Bethhoveen",
    usuario: "Bethoveen",
    password:"Aa1!"
}
var usuario1=new Usuario(data)
console.log(usuario1.getUsuario);
*/