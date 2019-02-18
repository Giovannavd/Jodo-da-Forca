
let palavras = [`girassol`, `maracujá`, `palmeira`, `melancia`, `mandioca`, `guepardo`, `avestruz`, `elefante`];

let aleatorio = function (min, max) {
    return Math.floor(Math.random() * (max - min)) - min;
}

let resposta = palavras[aleatorio(0, palavras.length - 1)];
let palpite = prompt(`A palavra tem 8 letras, e o tema é Natureza!${resposta}`); 

let i = 0;

while (i <= 6) {
    console.log(resposta);
    console.log(palpite);
    console.log(resposta.includes(palpite));
    if (resposta.includes(palpite)) {
        alert("Você está certo!");



    }
    else {
        alert("Você está errado");
        i++;
    }
    palpite = prompt(`A palavra tem 8 letras, e o tema é Natureza!${resposta}`);
    
}


let input = document.querySelector("input")

// let input

// XPathEvaluator.value 