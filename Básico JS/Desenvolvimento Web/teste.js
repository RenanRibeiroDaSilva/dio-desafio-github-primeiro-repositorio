// Comentario de linha, no vs code podemos usar o atalho Ctrl+/ para fazer comentraios em todas as linhas selecionadas

/* 
Comentario de varia linhas
*/

// DECLARAÇÃO DE VARIÁVEIS

var preco = 0; // uma boa prática na programação é dar um nome que faça sentido para as variáveis
var desconto = 1;
var z = 2;

const PRECO = 2; // uma boa prática na programção em JS é declarar as contantes com letras maiúsculas
var total = PRECO - desconto;

// DECLARÇÃO DE FUNÇÃO

function soma(a, b){
    console.log(a + b); // apenas oara visualizar no console
    return a + b; // 3 + 5 = 8
}

soma(3 + 5);