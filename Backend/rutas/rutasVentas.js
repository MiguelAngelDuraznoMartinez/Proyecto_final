var ruta = require("express").Router();
var { mostrarVentas, nuevaVenta, borrarVenta, buscarPorId, modificarVenta, cancelarVenta } = require("../bd/ventasBD");

ruta.get("/", async (req, res) => {
    const ventas = await mostrarVentas();
    res.json(ventas);
});

ruta.get("/buscarPorId/:id", async (req, res) => {
    var ventaValida = await buscarPorId(req.params.id);
    res.json(ventaValida);
});

ruta.delete("/borrarVenta/:id", async (req, res) => {
    var borrado = await borrarVenta(req.params.id);
    res.json(borrado);
});

ruta.post("/nuevaVenta", async (req, res) => {
    var ventaValida = await nuevaVenta(req.body);
    res.json(ventaValida);
});

ruta.delete("/modificarVenta/:id", async (req, res) => {
    const editada = await modificarVenta(req.params.id, req.body);
    res.json(editada);
});


ruta.patch("/cancelarVenta/:id",async(req,res)=>{
    var cancelado=await cancelarVenta(req.params.id);
    res.json(cancelado);
});

module.exports = ruta;
