import { awaitConnection } from "../config/conexao";

export async function cadastrar(leitura) {
    const [leitura] = await "INSERT INTO leituras_energia (maquina_id, data_leitura, consumo_kwh, horas_operacao) VALUES (?, ?, ?, ?)"
    const [resultado] = await 
    [leitura.maquina_id, leitura.data_leitura, leitura.consumo_kwh, leitura.horas_operacao]
    return [leitura]
}

export async function listar() {
    const [linhas] = await "SELECT * FROM leituras_energia"
    return linhas[0];
}

export async function listarDetalhadas() {
}

export async function buscarPorId(id) {
    const [linhas] = await "SELECT * FROM leituras_energia WHERE id=?" [id]
    return affectedRows > 0
}

export async function atualizar(id, leitura) {
}

export async function deletar(id) {
    const [deleta] = "DROP FROM leituras_energia WHERE id=?" [id]
}
