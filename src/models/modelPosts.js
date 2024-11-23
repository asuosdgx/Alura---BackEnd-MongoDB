import conectarAoBanco from "../config/dbConfig.js ";

const conexao = await conectarAoBanco(process.env.AUTH);

export async function getTodosPosts() {
  const db = conexao.db("imersaoInstaBytes");
  const colecao = db.collection("posts");
  return colecao.find().toArray();
}
