const ObjectId = require("mongodb").ObjectId;
const { Connection } = require("../data/mongo-connection");
const chalk = require("chalk");

async function getAll() {
   const categorias = await Connection.db.db("ecommerce").collection("categorias").find().toArray();
   return categorias;
}

async function create(categoria) {
   const resultado = await Connection.db.db("ecommerce").collection("categorias").insertOne(categoria);
   return resultado;
}

async function update(categoria) {
   const query = { _id: new ObjectId(categoria._id) };
   const newValues = {
      $set: {
         nombre: categoria.marca,
      },
   };
   const commandResult = await Connection.db.db("ecommerce").collection("categoria").updateOne(query, newValues);
   if (commandResult.result.n != 1) {
      throw new Error("No se actualizo la categoria");
   }
   return categoria;
}

async function removeById(id) {
   const result = await Connection.db
      .db("ecommerce")
      .collection("categorias")
      .deleteOne({ _id: new ObjectId(id) });
   if (result.deletedCount != 1) {
      throw new Error("No se elimino la categoria");
   }
   return id;
}

async function getById(id) {
   const idPorParametro = new ObjectId(id);
   const categoria = await Connection.db.db("ecommerce").collection("categorias").findOne({ _id: idPorParametro });
   return categoria;
}

module.exports = { getAll, create, update, removeById, getById };
