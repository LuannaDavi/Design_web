const amigos = []
const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;
const nasc = cadastro.nasc;
const whatsapp = cadastro.whatsapp;
const Lista = document.getElementById("lista")
cadastro.addEventListener("submit",function(e){
    e.preventDefault();
    let item = [nome.value,nasc.value,whatsapp.value];
    amigos.unshift(item);
    cadastro.reset();
    exibirLista();
});

function exibirLista(){
    
}
