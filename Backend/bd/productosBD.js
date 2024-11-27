const productosBD = require("./conexion").productos;
const Productos = require("../clases/ProductosClase");

function validarDatos(producto2){
    //console.log(producto2);
    var datosCorrectos = false;
    if(producto2.nombre!=undefined && producto2.cantidad!= undefined && producto2.precio!= undefined){
        datosCorrectos = true;
    }
    return datosCorrectos;
}

async function mostrarProductos(){
    const productos = await productosBD.get();
    //console.log(productos);
    var productosValidos=[];

    productos.forEach(productos => {
        //console.log(usuario.id);
        const producto1= new  Productos({id:productos.id,...productos.data()});
        const producto2 = producto1.getProducto;        
        if(validarDatos(producto2)){
            productosValidos.push(producto2);
        }    
    });
    //console.log (productosValidos); 
    return productosValidos;
}
async function buscarPorId(id){
const productos=await productosBD.doc(id).get();
const producto1 = new Productos({id: productos.id, ...productos.data()});
var productosValidos={error:true};
if(validarDatos(producto1.getProducto)) {
    productosValidos = producto1.getProducto;

}
//console.log(usuariosValido);
return productosValidos

}

async function nuevoProducto(data) {
    const producto1 = new Productos(data);
    //console.log(producto1.getProducto);
    var productosValidos = false;
    if (validarDatos(producto1.getProducto)) {
        await productosBD.doc().set(producto1.getProducto);
        productosValidos = true;
    }

    return productosValidos;
}


async function borrarProducto(id){
const producto= await buscarPorId(id);
var borrado = false; 
if(producto.error!=true){
    await productosBD.doc(id).delete();
    borrado = true;
}
//console.log(usuario);
return borrado;
} 

async function modificarProducto(id, data) {
    const productoExistente = await buscarPorId(id);
    var modificado = false;
    if (productoExistente.error != true) {
        await productosBD.doc(id).update(data);
        modificado = true;
    }
    return modificado;
}

module.exports={
    mostrarProductos,
    nuevoProducto,
    borrarProducto,
    buscarPorId,
    modificarProducto
}

//borrarUsuario("100");
//borrarUsuario("tW10xvFSKbqVT0LRmXTp");
//borrarUsuario("0b2lnbfgpNAxDB6toLbw");
 

/*data={
    nombre:"Benito Juarez",
    usuario:"benito",
    password:"abc"
}

nuevoUsuario(data);
*/


//buscarPorId("100");
//buscarPorId("tW10xvFSKbqVT0LRmXTp");
//mostrarUsuarios();