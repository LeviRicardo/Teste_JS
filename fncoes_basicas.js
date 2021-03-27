//var bem_vindo = "Mensagem de boas vindas";
//alert(bem_vindo+ " Concatenar é com +");
//console.log((bem_vindo.replace("de","asdasdsa")).toUpperCase());
/*
var frutas = [ "maçã", "pêra", "uva"];
console.log(frutas[2]);
console.log(frutas);
frutas.push("manga");//Adicona eleemnto no fim da lista
console.log(frutas);
frutas.pop();//Remove ´ltimo elemento da lista
console.log(frutas);
console.log(frutas.length);
console.log(frutas.reverse());
console.log(frutas.toString()[5]);
console.log(frutas.join("|"));
var fruta = {nome:"maçã", cor:"vermelha"}//Dicionário
var fruta = [{nome:"maçã", cor:"vermelha"}, {nome:"pêra", cor:"verde claro"}]//Lista de dicionários
console.log(fruta[1].cor)
*/
/*
var idade = 15
var idade = prompt("Sua idade")
if (idade >= 18){
    console.log("Maior de idade")
}else{
    console.log("Menor de idade")
}
*/
/*
var contador = 0
while(contador<=100){
    console.log(contador)
    contador++
}
for(; contador <=200; contador++){
    console.log(contador)
}
*/
/*
var data = new Date()
var contador
console.log(data)
console.log(data.getMonth())+1//os meses começam do 0, por isso o +1 pra bater com o calendário
for(contador=0; contador<=100; contador++){
    data = new Date()
    console.log("------------------------------")
    console.log(data.getMinutes())
    console.log(data.getSeconds())
    console.log(data.getMilliseconds())
}
*/
/*
function soma(valor1,valor2){
    var resultado;
    if(valor1%valor2 == 0){
        resultado = valor1+" é múltiplo de "+valor2
    }else{
        resultado = valor1+" não é múltiplo de "+valor2
    }
    return resultado
}

var um = prompt("Primeiro Valor")
var dois = prompt("Segundo Valor")

console.log(soma(um,dois))
console.log(10*.6)
*/
/*
function clique(){
    //var normal = (document.getElementById("teste"))
    (document.getElementById("teste")).innerHTML = "Clicado";
    //(document.getElementById("teste")).innerHTML = normal
}
*/
function nova_pagina(){
    window.open("https://www.youtube.com")
    window.location.href = "https://www.youtube.com"
}