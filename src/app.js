import express from "express";

const app = express();
app.use(express.json());

const livros = [
  {
    "id": 1,
    "title": "Senhor dos Anéis",
  },
  {
    "id": 2,
    "title": "O Hobbit",
  },
];

function buscaLivro(id){
  return livros.findIndex(livro => {
    return livro.id === Number(id);
  });
}

app.get("/", (req, res) => {
  return res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
  return res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  
  return res.status(201).send("Livro cadastrado com sucesso!");
});

app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  return res.status(200).json(livros[index]);
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].title = req.body.title;
  return res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  return res.status(200).send("Livro deletado com sucesso!");
});

export default app; 