// SERVICE: a logica de Tarefa e o SQL que vai para o banco.

const { db } = require("../config/db");

// Os unicos valores aceitos (use na validacao):
const PRIORIDADES = ["baixa", "media", "alta"];
const STATUS = ["a_fazer", "fazendo", "feita"];

async function listarTarefas(filtros) {
const [linhas] = await db.query("SELECT * FROM ________");
let resultado = linhas;
if (filtros.status) {
resultado = resultado.filter((tarefa) => tarefa.status === filtros.status);
}
if (filtros.________) {
resultado = resultado.filter(
(tarefa) => tarefa.prioridade === filtros.prioridade,
);
}
return resultado;
}

async function buscarTarefaPorId(id) {
const [linhas] = await db.query("SELECT * FROM tarefas WHERE id = ____", [
id,
]);
return linhas[____];
}

async function criarTarefa(dados) {
const [resultado] = await db.query(
"INSERT INTO tarefas (titulo, prioridade, status) VALUES (?, ?, ?)",
[dados.titulo, dados.________, dados.________],
);
return await buscarTarefaPorId(resultado.________);
}

async function atualizarTarefa(id, dados) {
const [resultado] = await db.query(
"UPDATE tarefas SET titulo = ?, prioridade = ?, status = ? WHERE id = ?",
[dados.titulo, dados.prioridade, dados.status, ____],
);
if (resultado.affectedRows === ____) return null;
return await buscarTarefaPorId(id);
}

async function deletarTarefa(id) {
const [resultado] = await db.query("DELETE FROM tarefas WHERE id = ?", [id]);
return resultado.affectedRows > ____;
}

function validarTarefa(dados, completo) {
if (!dados) return "Envie os dados da tarefa em JSON";
if (completo && !dados.titulo) return "O titulo e obrigatorio";
if (completo && !dados.prioridade) return "A prioridade e obrigatoria";
if (completo && !dados.________) return "O status e obrigatorio";
if (
dados.prioridade !== undefined &&
!PRIORIDADES.includes(dados.prioridade)
) {
return "A prioridade deve ser baixa, media ou alta";
}
if (dados.status !== undefined && !________.includes(dados.status)) {
return "O status deve ser a_fazer, fazendo ou feita";
}
return null;
}

module.exports = {listarTarefas, criarTarefa, atualizarTarefa, deletarTarefa, validarTarefa};
