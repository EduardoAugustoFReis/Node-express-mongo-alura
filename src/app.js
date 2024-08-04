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

app.get("/", (req, res) => {
  return res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
  return res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);

  
})

export default app; 