import axios from "axios";

const API_URL = "http://localhost:8000";

const getMangas = async () => {
  const response = await axios.get(API_URL + "/mangas");
  const mangas = response.data;

  console.log(mangas);
};

const cadastrarManga = async () => {
  const manga = {
    titulo: "Demon Slayer",
  };

  const response = await axios.post(API_URL + "/mangas", manga);

  console.log(response);
};

const atualizarManga = async () => {
  const manga = {
    titulo: "Jujutsu Kaisen",
  };

  const response = await axios.put(API_URL + "/mangas/1", manga);

  console.log(response);
};

const excluirManga = async () => {
  const response = await axios.delete(API_URL + "/mangas/1");

  console.log(response);
};

getMangas();
cadastrarManga();
atualizarManga();
excluirManga();