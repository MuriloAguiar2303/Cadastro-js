var area = document.getElementById("area")
var area2 = document.getElementById("botao")
  let meuNome = new Array(6)
    meuNome[0] = "Murilo Aguiar"
    meuNome[1] = "murilo aguiar"
    meuNome[2] = "MURILO AGUIAR"
    meuNome[3] = "mURILO aGUIAR"
    meuNome[4] = "Murilo aguiar"
    meuNome[5] = "murilo Aguiar"

function entrar(){
    let btnInicial = document.getElementById("botao1")
    btnInicial.setAttribute("hidden", true)
    
    
    var Label = document.createElement("label")
        Label.innerText = "Digite seu nome: "
        Label.id = "label"
        document.body.appendChild(Label)
        
    var nome = document.createElement("input")
    nome.type = 'text'
    nome.id = "nome"
    document.body.appendChild(nome)

    let botaoEntrar = document.createElement("button")
    botaoEntrar.innerHTML = "Entrar na conta"
    botaoEntrar.id = "btnEntrar"
    botaoEntrar.onclick = logar
    document.body.appendChild(botaoEntrar)
    
}

function logar(){
    
    var nome1 = nome.value
    
    
    if(nome1 === meuNome[0] || nome1 === meuNome[1] || nome1 === meuNome[2] || nome1 === meuNome[3] || nome1 === meuNome[4] || nome1 === meuNome[5]){
        area.innerHTML = "Bem vindo "+ nome1+"<br>"
        label = document.getElementById("label")
        label.setAttribute("hidden", true)
        nome = document.getElementById("nome")
        nome.setAttribute("hidden", true)
        botaoEntrar = document.getElementById("btnEntrar")
        botaoEntrar.setAttribute("hidden", true)
        
    }
    else{
        alert("Algo de errado")
        area.innerHTML = ("Clique no botão para entrar......") 
    }

    let botaoSair = document.createElement("Button")
    botaoSair.innerText = "Sair da conta"
    botaoSair.onclick = sair
    area.appendChild(botaoSair)
}

function sair(){
    alert("Até mais")
    area.innerHTML = "Você saiu!!!!!!!!!!"
    botao1.removeAttribute("hidden")

}