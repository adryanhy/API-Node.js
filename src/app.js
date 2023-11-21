import express from "express";
import connectDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await connectDB();

conexao.on("error", (erro)=>{
    console.error("Erro de conexão", erro);
});

conexao.once("open", ()=>{
    console.log("Conectado no banco!");
})

const app = express();
routes(app);

app.get("/mangas/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(mangas[index]);
})

 app.post("/mangas", (req, res) =>{
     mangas.push(req.body);
    //codigo 201 (registro criado)
    res.status(201).send("Manga cadastrado com sucesso!")
});

//atualizar
app.put("/mangas/:id", (req, res) =>{
    const index = buscaLivro(req.params.id);
    mangas[index].titulo = req.body.titulo;
    res.status(200).json(mangas);
})

//delete
app.delete("/mangas/:id", (req, res) =>{
    const index = buscaLivro(req.params.id);
    mangas.splice(index, 1);
    res.status(200).send("Manga removido com sucesso!");
})

export default app;

// mongodb+srv://admin:<password>@cluster0.eouvkpm.mongodb.net/?retryWrites=true&w=majority