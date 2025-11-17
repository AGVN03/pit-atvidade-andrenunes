const express = require("express");
const app = express();
app.use(express.json());

const produtos = [
  { id: 1, nome: "Cupcake Chocolate", preco: 8.50 },
  { id: 2, nome: "Cupcake Morango", preco: 9.00 }
];

app.get("/produtos", (req, res) => {
  res.json(produtos);
});

app.get("/produto/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find(p => p.id === id);
  res.json(produto || {});
});

app.post("/pedido", (req, res) => {
  res.json({ mensagem: "Pedido registrado com sucesso!" });
});

app.listen(3000, () => console.log("API rodando na porta 3000"));
