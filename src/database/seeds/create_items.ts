import { Knex } from "knex";

export async function seed(knex: Knex) {
  await knex("items").insert([
    {
      title: "Lampâdas",
      image: "lampadas.svg",
    },
    {
      title: "Pilhas e Baterias",
      image: "papeis-papelao.svg",
    },
    {
      title: "Residuos Eletrônicos",
      image: "eletronicos.svg",
    },
    {
      title: "Resíduos Orgânicos",
      image: "organicos.svg",
    },
    {
      title: "Oléo de Cozinha",
      image: "oleo.svg",
    },
  ]);
}
