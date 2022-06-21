// Calculadora com js
function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtação (-) \n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'));

    if (!operacao || operacao >= 7) {
        alert('Erro - operação inválida!');
        calculadora();
    } else {

        let n1 = Number(prompt('Insira o primeiro valor: '));
        let n2 = Number(prompt('Insira o segundo valor: '));
        let resultado;

        if (!n1 || !n2) {
            alert('Erro - parãmetros inválidos!')
            calculadora();
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
            }
            function multipicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
            }
            function divisao() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
            }
            function resto() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevadp a ${n2}ª é igual a ${resultado}`);
            }

            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até  mais!')
                } else {
                    alert('Digite uma opção válida!')
                    novaOperacao();
                }
            }

            if (operacao == 1) {
                soma();
            } else if (operacao == 2) {
                subtracao()
            } else if (operacao == 3) {
                multipicacao()
            } else if (operacao == 4) {
                divisao()
            } else if (operacao == 5) {
                resto()
            } else if (operacao == 6) {
                potenciacao()
            }
        }

    }
}
calculadora();