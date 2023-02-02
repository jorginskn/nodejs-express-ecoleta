import { Knex } from "knex";

export async function up(knex: Knex) {
  //criar a tabela
  return knex.schema.createTable("items", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("image").notNullable();
  });
}

export async function down(knex: Knex) {
  // voltar atrás(deletar a tabela)
  return knex.schema.dropTable("items");
}
