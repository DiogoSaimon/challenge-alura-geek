
const formulario = document.querySelector("[data-formulario]");
const camposInput = document.querySelectorAll("[required]");


camposInput.forEach((campo) => {
    campo.addEventListener("invalid", (evento) => evento.preventDefault());
    campo.addEventListener("blur", () => verificarCampo(campo));
})

const tiposDeErro = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
    "customError",
];

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        tooShort: "Por favor, preencha um nome com pelo menos 3 letras.",
    },
    preco: {
        valueMissing: "O campo de preço não pode estar vazio.",
    },
    imagem: {
        valueMissing: "O campo link imagem não pode estar vazio.",
    },
};

function verificarCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity("");

    tiposDeErro.forEach((erro) => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);
        }
    });

    const mensagemErro = campo.parentNode.querySelector("#mensagem-erro");
    const validadorDeInput = campo.checkValidity();

    if (!validadorDeInput) {
        mensagemErro.style.display = "block";
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
        mensagemErro.style.display = "none";
    }
}