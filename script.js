const botao = document.getElementById("botaoTema");

botao.addEventListener("click", function() {
    document.body.classList.toggle("tema-escuro");

    if (document.body.classList.contains("tema-escuro")) {
        botao.textContent = "Tema Escuro";
    } else {
        botao.textContent = "Mudar Tema";
    }
});