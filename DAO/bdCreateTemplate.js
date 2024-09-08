class CreateTemplate{
  constructor(idSite, nomeSite, telefoneSite, sobreSite, enderecoSite){
    this.idSite = idSite;
    this.nomeSite = nomeSite;
    this.telefoneSite = telefoneSite;
    this.sobreSite = sobreSite;
    this.enderecoSite = enderecoSite;
  }
  static templates = []
  static funcCreatInsertTemplate = (nomeSite, telefoneSite, sobreSite, enderecoSite) => {
    let id = CreateTemplate.templates.length + 1;
    let template = new CreateTemplate(id, nomeSite, telefoneSite, sobreSite, enderecoSite)
    CreateTemplate.templates.push(template)
  }
}

CreateTemplate.funcCreatInsertTemplate("site1", 1, "sobre1", "avenida1")
CreateTemplate.funcCreatInsertTemplate("site2", 2, "sobre2", "avenida2")
CreateTemplate.funcCreatInsertTemplate("site3", 3, "sobre3", "avenida3")
CreateTemplate.funcCreatInsertTemplate("site4", 4, "sobre4", "avenida4")
CreateTemplate.funcCreatInsertTemplate("site5", 5, "sobre5", "avenida5")

console.log(CreateTemplate.templates)
/**
 * No banco de dados preciso fazer a ligação e puxar o site pela chave 
 */