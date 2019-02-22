
let palavras = [`girassol`, `maracujá`, `palmeira`, `melancia`, `mandioca`, `guepardo`, `avestruz`, `elefante`];
let resposta = palavras[aleatorio(0, palavras.length - 1)];
let input = document.querySelector('#palpite');
let button = document.querySelector('#button');
let listaVazia = '';
let palavrasLista = resposta.split('');
let posicoesDaLetra = [];
let bracod = document.querySelector ('#bracod');
let cabeca = document.querySelector('#cabeca');
let tronco = document.querySelector('#tronco');
let bracoe = document.querySelector('#bracoe');
let pernad = document.querySelector('#pernad');
let pernae = document.querySelector('#pernae');
let corpo = [tronco, bracod, bracoe, pernad, pernae, cabeca];
let chances = 0;
let espaços = document.querySelectorAll('span');
let indicePalavra = percorrerPalavra();

let aleatorio = function (min, max) {
    return Math.floor(Math.random() * (max - min)) - min;
}

const percorrerPalavra = function(){
    for(i = 0; i < palavrasLista.length; i++){
}}

let span = document.querySelectorAll('span');
for (i in palavras.length){
    span[i] = input;
}

button.onclick = function(){
    listaVazia = input.value;
    input.value = '';
}
// 
while (chances <= 5){
    chances++;
    if(resposta.includes(input)){
        indicePalavra.indexOf(input)
        [indice].innerHTML = input
    }else{
        //colocar aparecer o parte do  corpo
        corpo[chances].style.display = 'block';
        chances ++;
    }

}
    




