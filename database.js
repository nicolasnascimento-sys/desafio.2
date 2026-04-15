const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

//Criando uma função assíncrona
const criarBanco = async () => {
  const db = await open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });

  //Criando a tabela de incidentes

  await db.exec(`(
    id INTEGER PRIMARY KEY AUTOINCREMENT
   remedio TEXT,
   localizacao TEXT,
   hora_remedio TEXT,
   oque_gosta TEXT,
   pacientes  TEXT,
   dia TEXT,
  
    
    )
    
`);

  console.log(
    "Banco de dados configurado: A tabela de registros urbanos está pronta!",
  );

  await db.exec(`
    INSERT INTO incidentes(remedio,localizacao,hora_remedio,oque_gosta,pacientes,dia) VALUES
    ("Iluminação", "Rua das Flores, 123, Bairro das Margaridas", "Poste queimado há dias", "Média", "Ana Clara", "16/03/2026", "10:30"),
    ("Falta de energia", "Hospital JP2", "Local na escuridão", "Alta", "Antonio Perna Quebrada", " 16/03/2026", "22:15"),
    ("Vazamento de água", "Rua das Camélias, 52", "Vazamento de água constante próximo ao bueiro.", "Alta", "Julia Martins", "2026-03-16", "10:00"),
    ("Pavimentação", "Avenida C, Bairro D","Calçada em mau estado", "Alta", "Maria Oliveira","14/03/2026", "14:30"),
    ("Falta de água", "Rua T, 146, Jardim Imbarie", "Moradores sem água", "Alta", "Dona Fofoca", " 16/03/2026", "10:00")
    `);


  const todosOsIncidentes = await db.all("SELECT * FROM incidentes");
  console.table(todosOsIncidentes);
};

criarBanco();