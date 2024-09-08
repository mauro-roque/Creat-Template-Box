import { funInverterTelas } from "../view/telaInverter.js";
const localTemplate = document.getElementById("localTemplate")

document.getElementById("buttonCreatSite").addEventListener("click", () => {
    const nomeSite = document.getElementById("nomeSite").value.trim();
    const telefoneSite = document.getElementById("telefoneSite").value.trim();
    const sobreSite = document.getElementById("sobreSite").value.trim();
    const enderecoSite = document.getElementById("enderecoSite").value.trim(); // Correção aqui

    funInverterTelas.sumirTodasTelas();
    localTemplate.innerHTML = creatTemplatePadrao(nomeSite, telefoneSite, sobreSite, enderecoSite);
});

function creatTemplatePadrao(nomeSite, telefoneSite, sobreSite, enderecoSite) {
    return `
        <h1>${nomeSite}</h1>
        <p>${telefoneSite}</p>
        <p>${sobreSite}</p>
        <span>${enderecoSite}</span>
    ` 
}
