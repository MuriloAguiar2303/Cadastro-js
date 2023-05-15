var area = document.getElementById("area")
var area2 = document.getElementById("botao")


function entrar(){
    var nome = prompt("Digite seu nome")

    if(nome === '' || nome === null){
    alert("Algo de errado")
    area.innerHTML = ("Clique no botão para entrar......")
    botaoSair = hidden
    }
    else{
        area.innerHTML = "Bem vindo "+ nome+"<br>"
     
    }

    let botaoSair = document.createElement("Button")
    botaoSair.innerText = "Sair da conta"
    botaoSair.onclick = sair
    area.appendChild(botaoSair)
}
function sair(){
    alert("Até mais")
    area.innerHTML = "Você saiu!!!!!!!!!!"
}