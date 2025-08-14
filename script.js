window.addEventListener("load", () => {
    const expressao = document.getElementById("expressao");
    const texto = document.getElementById("texto");
    const status = document.getElementById("status");

    function validar() {
        const regex = new RegExp(expressao.value);
        if(regex.test(texto.value)) {
            texto.style.background = "#31f565"
            status.textContent = "Válido";
            status.style.color = "#31f565";
        } else {
            texto.style.background = "#f75145";
            status.textContent = "Inválido";
            status.style.color = "#f75145";
        }
    }

    expressao.addEventListener("input", validar);
    texto.addEventListener("input", validar);
});
