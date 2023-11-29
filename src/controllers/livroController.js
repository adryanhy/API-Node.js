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
    };

    static async listarLivroPorID(req, res) {
        try{
        //chamando o model
        const id = req.params.id;
        const mangaEncontrado = await livro.findById(id);
        res.status(200).json(mangaEncontrado);
        } catch (erro){
            res.status(500).json({ message: `${erro.message} - falha na requisição do manga` });
        }
    };

    static async atualizarLivro(req, res) {
        try{
        //update
        //chamando o model
        const id = req.params.id;
        await livro.findByIdAndUpdate(id, req.body);
        res.status(200).json({message: "Mangá atualizado"});
        } catch (erro){
            res.status(500).json({ message: `${erro.message} - falha na atualização do mangá` });
        }
    };

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body)
            res.status(201).json({ message: "Criado com sucesso!", livro: novoLivro })
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - FALHA AO CADASTRAR LIVRO`});
        }
    };

    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Excluído com sucesso!"})
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - FALHA AO EXCLUIR MANGÁ`});
        }
    };

};

export default LivroController;
