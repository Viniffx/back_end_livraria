import {db} from "../config/db.js";


export async function criarAvaliacao (req, res){
  try {
    const { nota, comentario, data } = req.body;
    if (!nota || !comentario || !data)
      return res.status(400).json({ erro: "Campos obrigatórios" });

    await db.execute(
      "INSERT INTO avaliacoes (nota, comentario, data_avaliacao) VALUES (?, ?, ?)",
      [nota, comentario, data_avaliacao]
    );

    res.json({ mensagem: "Avaliação criada com sucesso!" });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};


export async function listarAvaliacoes (req, res){
  try {
    const [rows] = await db.execute("SELECT * FROM avaliacoes");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};