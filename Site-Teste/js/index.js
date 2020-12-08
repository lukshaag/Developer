var nome = "Lucas Saraiva";
var cargo = "Designer "

var nomeCurriculo = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNomeNoSeuCurriculo(nome){
nomeCurriculo.innerHTML = nome;
}

function logarNome() {
    console.log(nome);
}

function colocarCargoNoHtml(cargo) {
cargoHtml.innerHTML = cargo;
}

function clickNoProjetos(){
    console.log("Clicou no botao projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clickNoSobre() {
    texto1.style.display = "block"
    texto2.style.display = "none"
}
colocarNomeNoSeuCurriculo(nome)
colocarCargoNoHtml(cargo)
