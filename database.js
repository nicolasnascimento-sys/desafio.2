const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

//Criando uma função assíncrona
const criarBanco = async () => {
  const db = await open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });
}
criarBanco();
