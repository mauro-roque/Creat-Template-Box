const cadastro = document.getElementById("templateCadastro");
const login = document.getElementById("templateLogin");
const telaCreateSite = document.getElementById("templateFormCreatSite");
const telaFormCreatTemplate = document.getElementById("templateFormCreatSite");

const funInverterTelas = {
    inverterTelaCadastroTelaLogin(){
        login.classList.remove('sumir')
        cadastro.classList.add('sumir')
    },
    inverterTelaLoginTelaCadastro(){
        cadastro.classList.remove('sumir')
        login.classList.add('sumir')
    },
    sumirFormsDeCadastro_Login(){
        cadastro.classList.add('sumir')
        login.classList.add('sumir')
        telaCreateSite.classList.remove('sumir')
    },
    sumirTodasTelas(){
        telaFormCreatTemplate.classList.add('sumir')
        cadastro.classList.add('sumir')
        login.classList.add('sumir')
    }
}

const irTelaLogin = document.getElementById("irTelaLogin")
const irTelaCadastro = document.getElementById("irTelaCadastro")

irTelaLogin.addEventListener("click", () => {
    funInverterTelas.inverterTelaCadastroTelaLogin()
})
irTelaCadastro.addEventListener("click", () => {
    funInverterTelas.inverterTelaLoginTelaCadastro()
})

export {
    funInverterTelas
}




