///Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculeIndiceDeMassa(altura, peso) {
    let imc = peso / (altura * altura);

}


///Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
}
  
  // Exemplo de uso
  let numero = 5;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);


///Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converteMoedas(dolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
}


///Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
let altura = 4
let largura = 5
function descobreAreaPerimetro(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    alert (area, perimetro);
}


///Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
  
  // Exemplo de uso
  let raio = 4; // em metros
  calcularAreaPerimetroSalaCircular(raio);



///Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero){
    for(i = 1; i <= 10; i++){
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}
// Exemplo de uso
let numero = 7;
mostrarTabuada(numero);


///////////

///Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];


///Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']


///Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
linguagensDeProgramacao.push('Java', 'Ruby', 'Golang');


///Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let listaqualquer = [1, 2, 3];
console.log(listaqualquer[0]);


///Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
let lista = ['gabriel', 'akira', 'borges'];
console.log(lista[1]);


///Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
let listaa = ['gabriel', 'akira', 'borges'];
console.log(lista[-1]);