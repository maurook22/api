const express = require("express");
const router = express.Router();
const pruebaRepository = require("../data/prueba");


// GET Todos los productos
router.get("/", async (req, res) => {
    const data = await pruebaRepository.getAll();
    res.json(data);
 });
/*
router.get("/:id", async (req, res) => {
   const productId = req.params.id;
   const data = await pruebaRepository.getById(productId);
   if(data){
      res.json(data);
   }else{
      res.status(404).send("NOT FOUND");
   }
   
}); 

 // Agregar un producto
router.post("/", async (req, res) => {
    const product = req.body;
    try {
       const result = await pruebaRepository.create(product);
       if(result.insertedCount == 1){
          res.status(201).send("El producto se agrego a productos");
       }else{
          res.status(500).send("Error al intentar agregar el producto");
       }
    } catch (error) {
       res.status(500).send(error);
    }
 });

 router.put("/:id", async (req, res) => {
    const product = req.body;
    try {
       product._id = req.params.id;
       const result = await pruebaRepository.update(product);
       res.json(result);
    } catch (error) {
       res.status(500).json({error: error.message});
    }
 });


// Eliminacion de producto
router.delete("/:id", async (req, res) => {
    try {
       const result = await pruebaRepository.removeById(req.params.id);
       res.json({"mensaje":"Se elimino el producto con ID: " + result});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
 });
*/
 module.exports = router;
