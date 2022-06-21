// declaração de função
function funcao() {
    console.log('Essa mensagem veio de uma função');
}

funcao()

// declaração de função com parâmetros
function mensagem(primeiro, segundo) {
    console.log(primeiro, segundo)
}

mensagem('Tudo certo', 'jovem!');

// Expressão de função
// com nomeação
var funcao1 = function(){
    console.log('Sou uma mensagem de função expressão!')
}

funcao1()

// arrow function
var funcao2 = () => {
    console.log('Sou uma arrow function')
}
funcao2();