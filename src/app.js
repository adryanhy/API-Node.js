import express from "express";
import connectDB from "./config/dbConnect.js";
import routes from "./routes/index.js";
import axios from "axios";

const conexao = await connectDB();

conexao.on("error", (erro)=>{
    console.error("Erro de conexão", erro);
});

conexao.once("open", ()=>{
    console.log("Conectado no banco!");
})

const app = express();
routes(app);

// //delete
// app.delete("/mangas/:id", (req, res) =>{
//     const index = buscaLivro(req.params.id);
//     mangas.splice(index, 1);
//     res.status(200).send("Manga removido com sucesso!");
// })

export default app;
