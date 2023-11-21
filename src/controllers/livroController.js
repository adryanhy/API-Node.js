import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {
        try{
        //chamando o model
        const listaMangas = await livro.find({});
        res.status(200).json(listaMangas);
        } catch (erro){
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body)
            res.status(201).json({ message: "Criado com sucesso!", livro: novoLivro })
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - FALHA AO CADASTRAR LIVRO`});
        }
    }

};

export default LivroController;
