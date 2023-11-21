import express from "express";
import connectDB from "./config/dbConnect.js";
import livro from "./models/Livro.js"

const conexao = await connectDB();

conexao.on("error", (erro)=>{
    console.error("Erro de conexão", erro);
});

conexao.once("open", ()=>{
    console.log("Conectado no banco!");
})

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/mangas", async (req, res) =>{
    //chamando o model
    const listaMangas = await livro.find({});
    res.status(200).json(listaMangas);
});

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