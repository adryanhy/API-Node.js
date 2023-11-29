import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

//Rotas do CRUD
routes.get("/mangas", LivroController.listarLivros);
routes.get("/mangas/:id", LivroController.listarLivroPorID);
routes.post("/mangas", LivroController.cadastrarLivro);
routes.put("/mangas/:id", LivroController.atualizarLivro);
routes.delete("/mangas/:id", LivroController.excluirLivro);

export default routes;