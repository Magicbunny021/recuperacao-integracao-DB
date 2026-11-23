export async function cadastrar(leitura) {
    const [leitura] = "INSERT INTO leituras_energia (maquina_id, data_leitura, consumo_kwh, horas_operacao) VALUES (?, ?, ?, ?)"
    const [resultado] = await conexao.execute (
        leitura.maquina_id,
        leitura.data_leitura, 
        leitura.consumo_kwh, 
        leitura.horas_operacao
    )
    return [resultado]
}

export async function listar() {
    const [linhas] = "SELECT * FROM leituras_energia"
    return [linhas];
}

export async function listarDetalhadas() {
}

export async function buscarPorId(id) {
    const [linhas] = "SELECT * FROM leituras_energia WHERE id=?" [id];
    return linhas[0]
}

export async function atualizar(id, leitura) {
        const [leitura] = "INSERT INTO leituras_energia (maquina_id, data_leitura, consumo_kwh, horas_operacao) VALUES (?, ?, ?, ?) WHERE id=?" [id]
        const [resultado] = await conexao.execute (
        leitura.maquina_id,
        leitura.data_leitura, 
        leitura.consumo_kwh, 
        leitura.horas_operacao,
        id
    );
    return [resultado]
}

export async function deletar(id) {
    const sql = "DROP FROM leituras_energia WHERE id=?" [id]
}
