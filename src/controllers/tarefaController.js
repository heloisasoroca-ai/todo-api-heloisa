// CONTROLLER: recebe da rota, chama o service e devolve a resposta.

const tarefaService = require("../services/tarefaService");

async function listar(req, res) {
const tarefas = await tarefaService.listarTarefas(req.query);
res.status(____).json(tarefas);
}

async function buscarPorId(req, res) {
const tarefa = await tarefaService.buscarTarefaPorId(req.params.id);
if (!tarefa) {
res.status(____).json({ erro: "Tarefa nao encontrada" });
return;
}
res.status(200).json(tarefa);
}

async function criar(req, res) {
const novaTarefa = await tarefaService.criarTarefa(req.body);
res.status(____).json(novaTarefa);
}

const criarTarefa = (req, res) => {
  const erro = tarefaService.validarTarefa(req.body, true);
if (erro) {
res.status(____).json({ erro: erro });
return;
}
}

module.exports = {listar};
