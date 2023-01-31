import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("Listagem de usuários");

  response.json([
    'Diego',
    'Jorge',
    'Luiz',
    'Murilo',
    'carai',
    'Caio'
  ])
});

app.listen(3333);
