import { conectaAPI } from "./conectaApi.js";
import { deletarProduto } from "./removerProduto.js";

const lista = document.querySelector("[data-lista]");

function construirCard(nome, preco, imagem, id) {
    const card = document.createElement("div");
    card.className = "meus__produtos__card";
    const precoComVírgula = preco.replace(".", ",");
    card.innerHTML = `
    <img class="meus__produtos__lista__card__imagem" src="${imagem}" alt="foto ${nome}" />
                <div class="meus__produtos__lista__card__texts">
            <p class="meus__produtos__lista__card__titulo">${nome}</p>
              <div class="meus__produtos__lista__card__preco">
                <p class="meus__produtos__lista__card__titulo">$ ${precoComVírgula}</p>
                <img class="meus__produtos__lista__card__icone" id="${id}" src="./assets/delete-icon.png" data-remover></img>
              </div>
                </div>

              `;
    return card;
}

function mensagemErroNaLista(elemento, classe, mensagem) {
    elemento.setAttribute("class", "meus__produtos__lista__vazia");
    elemento.innerHTML = `
                <h1 class=${classe}>${mensagem}</h1>
            `
}

async function listarCard() {
    try {
        const listaAPI = await conectaAPI.mostrarProdutos();

        if (listaAPI.length > 0) {
            await listaAPI.forEach(element => lista.appendChild(
                construirCard(element.nome, element.preco, element.imagem, element.id)
            ));

            const botaoDeletar = document.querySelectorAll("[data-remover]");
            botaoDeletar.forEach(botao => {
                botao.addEventListener("click", () => deletarProduto(botao.id));
            });
        } else {
            mensagemErroNaLista(lista, "meus__produtos__lista__vazia", "NENHUM PRODUTO CADASTRADO");
        }
    } catch (error) {
        mensagemErroNaLista(lista, "meus__produtos__lista__vazia", "NÃO FOI POSSÍVEL CARREGAR OS PRODUTOS, TENTE NOVAMENTE");
        console.error("Erro ao carregar os produtos:", error);
    }


}

listarCard();