var ruta = require("express").Router();//nombre que quiera a la variable
//var {Router} = require("express"); //aqui esta la estructuracion llamando a una funcion Router
var {mostrarUsuarios,nuevoUsuario,borrarUsuario,buscarPorId,modificarUsuario,login}=require("../bd/usuariosBD");

ruta.post("/login",async(req,res)=>{
    const usuario=await login(req,req.body.usuario,req.body.password)
    res.json(usuario)
});

ruta.get("/",async(req,res)=>{
    //res.send("hola estas en la raiz");
    const usuarios=await mostrarUsuarios();
    //console.log(usuarios);
    res.json(usuarios);
});
ruta.get("/buscarPorId/:id",async(req,res)=>{
    var usuariosValido=await buscarPorId(req.params.id);
    res.json(usuariosValido);
});

ruta.delete("/borrarUsuario/:id",async(req,res)=>{
    var borrado=await borrarUsuario(req.params.id);
    res.json(borrado);
});

ruta.post("/nuevoUsuario", async(req,res)=>{
    var usuariosValido = await nuevoUsuario(req.body);
    res.json(usuariosValido);
})

ruta.put("/modificarUsuario/:id", async (req, res) => {
    const modificado = await modificarUsuario(req.params.id, req.body);
    res.json(modificado);
});

ruta.get("/buscar", async (req, res) => {
    const { query } = req.query; // Obtener el texto de búsqueda
    const usuarios = await mostrarUsuarios();
    
    // Filtrar usuarios por nombre que coincida parcialmente con el query
    const resultados = usuarios.filter(usuario => 
        usuario.nombre.toLowerCase().includes(query.toLowerCase())
    );

    res.json(resultados);
});

module.exports=ruta;