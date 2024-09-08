class Database {
  constructor(id, user, telefone, email, senha, tipoAssinatura, template){
    this.id = id;
    this.user = user;
    this.telefone = telefone;
    this.email = email;
    this.senha = senha;
    
    /*
    this.tipoAssinatura = tipoAssinatura;
    this.template = template;
    
     * 1- Diamante;
     * 2- Ouro;
     * 3- Prata;
     * 4- Bronze;
     
     */
  }
  static dataUsers = []
  static funcCreatInsertUser = (user, telefone, email, senha) => {
    let id = Database.dataUsers.length + 1;
    let pessoa = new Database(id, user, telefone, email, senha);
    Database.dataUsers.push(pessoa)
  }
}

Database.funcCreatInsertUser("roque1", "1", "roque1@gmail.com", "roque123")
Database.funcCreatInsertUser("roque2", "2", "roque2@gmail.com", "roque234")
Database.funcCreatInsertUser("roque3", "3", "roque3@gmail.com", "roque345")
Database.funcCreatInsertUser("roque4", "4", "roque4@gmail.com", "roque567")
Database.funcCreatInsertUser("roque5", "5", "roque5@gmail.com", "roque890")

//console.log(Database.dataUsers)

export {
  Database
}
