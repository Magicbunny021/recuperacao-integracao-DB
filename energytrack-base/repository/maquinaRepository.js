export async function cadastrar(maquina) {
    const [maquina] = "INSERT INTO maquinas (codigo, nome, setor, status) VALUES (?, ?, ?, ?)"
        const [resultado] = await conexao.execute (
        maquina.codigo,
        maquina.nome, 
        maquina.setor, 
        maquina.status
    )
    return [resultado]
}

export async function listar() {
    const [linhas] = "SELECT * FROM maquinas"
    return [linhas];
}

export async function buscarPorId(id) {
    const [linhas] = "SELECT * FROM maquinas WHERE id=?" [id];
    return linhas[0]
}

export async function atualizar(id, maquina) {
        const [maquina] = "INSERT INTO maquinas (codigo, nome, setor, status) VALUES (?, ?, ?, ?) WHERE id=?" [id]
        const [resultado] = await conexao.execute (
        maquina.codigo,
        maquina.nome, 
        maquina.setor, 
        maquina.status,
        id
    );
    return [resultado]
}

export async function deletar(id) {
}
