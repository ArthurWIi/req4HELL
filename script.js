let ativo = false;

function ativarModo() {
    const body = document.getElementById("body");
    const texto = document.getElementById("texto");

    if (!ativo) {
        body.style.backgroundColor = "#2e0000";
        texto.innerText = "Status: DEMOCRACIA ESPALHADA!";
    } else {
        body.style.backgroundColor = "#0b0b0f";
        texto.innerText = "Status: Aguardando ordens";
    }

    ativo = !ativo;
}