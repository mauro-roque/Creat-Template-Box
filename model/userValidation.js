import { Database } from "../DAO/bdUser.js";

class VerificacaoUser {
  // Método principal para verificar o usuário
  mainVerificacaoUser = (email, user, telefone, senha) => {
    if (!this.veriQuantidadeCaracteresEmail(email)) {
      console.log("400 - Email com caracteres insuficientes");
      alert("Email com caracteres insuficientes")
      return; // Para a execução se o email for inválido
    }

    this.veriEmailCreatNewUser(user, telefone, email, senha);
  };

  // Verifica quantidade de caracteres do email
  veriQuantidadeCaracteresEmail = (email) => {
    let cont = email.length;
    if (cont < 10) {
      return false; // Retorna falso se o email for muito curto
    }
    return true; // Retorna verdadeiro se o email for válido
  };

  // Verificação se o email já está cadastrado
  veriEmailCreatNewUser = (user, telefone, email, senha) => {
    for (const element of Database.dataUsers) {
      if (element.email === email) { // Verifica se o email já existe
        console.log("409 - Email já cadastrado");
        return;
      }
    }

    // Caso o email não exista, cria o novo usuário
    Database.funcCreatInsertUser(user, telefone, email, senha);
    console.log("201 - Usuário criado com sucesso");
    alert("Usuario Cadastrado com Sucesso")
  };
}

export { VerificacaoUser };
