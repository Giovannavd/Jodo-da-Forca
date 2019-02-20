
let palavras = [`girassol`, `maracujá`, `palmeira`, `melancia`, `mandioca`, `guepardo`, `avestruz`, `elefante`];
let input = document.querySelector('#palpite');
let button = document.querySelector('#button');
let listaVazia = '';
let palavrasLista = palavras[0].split('');
let posicoesDaLetra = [];
let bracod = document.querySelector ('#bracod');
let cabeca = document.querySelector('#cabeca');
let tronco = document.querySelector('#tronco');
let bracoe = document.querySelector('#bracoe');
let pernad = document.querySelector('#pernad');
let pernae = document.querySelector('#pernae');
let corpo = [bracod, tronco, bracoe, pernad, pernae, cabeca];


button.onclick = function(){
    listaVazia = input.value;
    input.value = '';
}

const percorrerPalavra = function(){
    for(i = 0; i < palavrasLista.length; i++){
        if(listaVazia == palavrasLista[i]){
            posicoesDaLetra.push(i);
        }   


        else{
            for(i = 0; i <= corpo.length; i++){
               console.log
            }


        }
    }
}

let span = document.querySelectorAll('span');
for (i in palavras.length){
    span[i] = input;
}






// let aleatorio = function (min, max) {
//     return Math.floor(Math.random() * (max - min)) - min;
// }

// let resposta = palavras[aleatorio(0, palavras.length - 1)];
// let palpite = prompt(`A palavra tem 8 letras, e o tema é Natureza!${resposta}`); 

// let i = 0;

// while (i <= 6) {
//     console.log(resposta);
//     console.log(palpite);
//     console.log(resposta.includes(palpite));
//     if (resposta.includes(palpite)) {
//         alert("Você está certo!");



//     }
//     else {
//         alert("Você está errado");
//         i++;
//     }
//     palpite = prompt(`A palavra tem 8 letras, e o tema é Natureza!${resposta}`);
    
// }


// let input = document.querySelector("input")
