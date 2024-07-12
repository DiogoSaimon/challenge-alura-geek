import { conectaAPI } from "./conectaApi.js";

async function deletarProduto(produtoId) {
    try {
        await conectaAPI.removerProduto(produtoId);
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
    }

    window.location.reload(true);
}

export { deletarProduto };