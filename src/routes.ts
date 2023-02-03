import express, { response } from "express";
import knex from "./database/connection";

const routes = express.Router();

routes.get("/items", async (request, response) => {
  //SELECT * FROM items
  const items = await knex("items").select("*");
  const serializedItems = items.map((item) => {
    return {
      id: item.id,
      title: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    };
  });
  return response.json({ serializedItems });
});

routes.post("points", async (request, response) => {
  const  {
    name,
    email,
    image,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    items,

  } =  request.body;  
  await knex('points').insert({
    name,
    email,
    image: 'image-fake',
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
  })
});
export default routes;
