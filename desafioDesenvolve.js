
// Desafio 1
// Dado um número inteiro positivo n, escreva um algoritmo que desenhe uma escada (staircase) com n degraus usando o caractere '#' (jogo da velha).
    function escada(altura) {
        let degraus = [];
        
        // cria cada linha da escada e adiciona ao array "degraus"
        for (let i = 1; i <= altura; i++) {

            let linha = " ".repeat(altura - i) + "#".repeat(i);
        degraus.push(linha);
        }

        // imprime cada linha da escada no console
        degraus.forEach(function(item) {
        console.log(item);
        });
        }

    escada(4);

    // Desafio 2
    // Dado um número inteiro positivo n, escreva um algoritmo que determine 
    // a soma de todos os inteiros positivos menores ou iguais a n.

        // N = 8;  total =36; n= 1+2+3+4+5+6+7+8;

    let n = 0;
    let x = 0;
    while (n < 8) {
    n++;
    x += n;
}
    console.log(x)

    // Desafio 3
    // Dado um número inteiro positivo n, escreva um algoritmo que desenhe uma pirâmide (pyramid) com n andares usando o caractere '#' (jogo da velha).
    function piramide(altura) {

        let desenhoPiramide = [];

        for (let i = 1; i <= altura; i++) {

            let espacos = ' '.repeat(altura - i) + '#'.repeat(i * 2 - 1);
            // let blocos = '#'.repeat(i * 2 - 1);

            desenhoPiramide.push(espacos);
            // desenhoPiramide.push(espacos + blocos);
            // console.log(espacos + blocos + espacos);
            }

            // imprime cada linha da piramide no console

            desenhoPiramide.forEach(function(item) {
            console.log(item);
            });
            }
        
    piramide (3)
    
    // Desafio 4
    // Dada uma matriz mat de tamanho mxn, escreva um algoritmo que calcule a soma de todos os elementos da matriz.

    const matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    console.log(matriz.join('\n'));

    const soma = calculo(matriz);

    function calculo (matriz) {
        let soma = 0;
        for (let i= 0; i < matriz.length; i++ ) {
            
            for (let x=0; x < matriz[i].length;x++){
                soma+= matriz[i][x];
            }
        }
        return soma;
    }
    console.log(soma)



    // Desafio 5 
    function multiplos(numero){
        
        let  multiplosDosNumeros = [];

        for(let i = 1; i <= numero; i++){
        
            if (i % 3 === 0 && i % 5 === 0) {

                console.log ("FizzBuzz")
            }
            else if (i % 3 === 0) {

                console.log ("Fizz")
            }
            else if (i % 5 === 0) {

                console.log ("Buzz")
            }

            else {

                console.log (i)
            }
            
        }
        
        multiplosDosNumeros.forEach(function(nn) {
            console.log(nn)
        })
    }
    multiplos (20)