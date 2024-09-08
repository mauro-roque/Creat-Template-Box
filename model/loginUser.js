import { Database } from "../DAO/bdUser.js";
import { funInverterTelas } from "../view/telaInverter.js";

document.getElementById("buttonEntrar").addEventListener("click", () => {
  const emailLogin = document.getElementById("EmailCadastrado").value.trim();
  const senhaLogin = document.getElementById("SenhaCadastrado").value.trim();
  let usuarioEncontrado = false;

  for (const usuario of Database.dataUsers) {
    if (usuario.email === emailLogin) {
      if (usuario.senha === senhaLogin) {
        console.log("200");
        usuarioEncontrado = true;
        funInverterTelas.sumirFormsDeCadastro_Login()
        alert("Login Concedido");
        break;
      } else {
        console.log("401");
        alert("Senha incorreta");
        return; // Saia após exibir mensagem de senha incorreta
      }
    }
  }

  if (!usuarioEncontrado) {
    console.log("404");
    alert("Email não encontrado");
  }
});
