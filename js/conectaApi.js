
async function mostrarProdutos() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();
    console.table(conexaoConvertida);
    return conexaoConvertida;
}

async function adicionarProduto(nome, preco, imagem) {
    const precoConverdito = parseFloat(preco).toFixed(2);
    const precoFormatado = precoConverdito.toString().replace('.', ',');

    try {
        const conexao = await fetch("http://localhost:3000/produtos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                nome: nome,
                preco: precoFormatado,
                imagem: imagem,
            }),
        })

        const conexaoConvertida = conexao.json();

        return conexaoConvertida;

    } catch (error) {
        console.error("Erro ao construir produto:", error);
        throw error;
    }
}

async function removerProduto(produtoId) {
    try {
        const conexao = await fetch(`http://localhost:3000/produtos/${produtoId}`, {
            method: "DELETE",
        });
        const conexaoConvertida = await conexao.json();
        console.log(conexaoConvertida);
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
        throw error;
    }
}

export const conectaAPI = {
    mostrarProdutos,
    adicionarProduto,
    removerProduto,
}