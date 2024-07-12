const botaoLimpar = document.querySelector("[data-botao-limpar]");

botaoLimpar.addEventListener("click", (evento) => {

    evento.preventDefault();

    const nome = document.querySelector("[data-nome]");
    const preco = document.querySelector("[data-preco]");
    const imagem = document.querySelector("[data-imagem]");
    let mensagemErro = document.querySelectorAll("mensagem-erro");

    nome.value = "";
    preco.value = "";
    imagem.value = "";
    mensagemErro.textContent = "";
});