
let titutulo = document.querySelector('h1');
titutulo.innerHTML = 'Hora do Desafio';

function verificarClique(){
    console.log('O botão foi clicado!');
}

function amoJS(){
    alert('Eu amo JS');
}

function cidadeBrasil(){
    let cidade = prompt('Nome de uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de você`);
}
function somandoDoisNumeros() {
    let numero1 = parseInt(prompt('Me fale um número: '));
    let número2 = parseInt(prompt('Me fale outro número: '));
    let resultado = numero1 + numero2;
    alert(`${numero1} + ${numero2} = ${resultado}`)
}

function mensagemNoConsole(){
    console.log('Olá, mundo!');
}

function recebeNome(nome){
    console.log(`Olá, ${nome}`);

}

function dobroDeNumero(numero){
    return parseInt(numero * 2);
}

function media(numero1, numero2, numero3){
    return parseInt((numero1 + numero2 + numero3) / 3);
}

function maiorNumero(numero1, numero2){
    return numero1 > numero2 ? numero1 : numero2;
}

function numeroElevadoA2(numero){
    return parseInt(numero * numero);
}