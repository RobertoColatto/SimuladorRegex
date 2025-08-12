window.addEventListener("load", () => {
    const expressao = document.getElementById("expressao");
    const texto = document.getElementById("texto");

    function validar() {
        try {
            const regex = new RegExp(expressao.value);
            if(regex.test(texto.value)) {
                texto.className = "match";
            } else {
                texto.className = "no-match";
            }
        } catch(e) {
            texto.className = "";
        }
    }

    expressao.addEventListener("input", validar);
    texto.addEventListener("input", validar);
});
