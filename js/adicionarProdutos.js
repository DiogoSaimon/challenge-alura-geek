import { conectaAPI } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", evento => criarProduto(evento));

async function criarProduto(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const preco = document.querySelector("[data-preco]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    try {
        await conectaAPI.adicionarProduto(nome, preco, imagem);
    } catch (error) {
        console.error("Erro ao criar produto:", error);
    }

    window.location.reload(true);
}