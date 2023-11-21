import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/mangas", LivroController.listarLivros);

export default routes;