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
    let itens = "";
    for(let i = 0; i < amigos.length; i++){
        let item = amigos[i];
        let remover = `<button onclick="remover(${i})">Remover</button>`
        let li = `<li>${item[0]}|${item[1]}|${item[2]}|${remover}</li>`;
        itens = itens + li   
    }
    Lista.innerHTML = itens;
}

function remover(i){
    let item = amigos[i];
    let check = confirm (`Deseja realmente excluir ${item[0]}?`);
    if (check == true){
        amigos.splice(i,1);
    }
    exibirLista();
}
