import { Knex } from "knex";

export async function up(knex: Knex) {
  //criar a tabela
  return knex.schema.createTable("point_itens", (table) => {
    table.increments("id").primary();
    table.integer("point_id").notNullable().references("id").inTable("points");
    table.integer("item_id").notNullable().references("id").inTable("items");
  });
}

export async function down(knex: Knex) {
  // voltar atrás(deletar a tabela)
  return knex.schema.dropTable("point_itens");
}
