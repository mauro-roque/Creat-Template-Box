import { VerificacaoUser } from "./userValidation.js";
const enviar = document.getElementById("enviar")

enviar.addEventListener("click", (event) => {
  event.preventDefault(); // Para a página não recarregar

  const user = document.getElementById("user").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const create_verifica = new VerificacaoUser();
  create_verifica.mainVerificacaoUser(email, user, telefone, senha);
});






