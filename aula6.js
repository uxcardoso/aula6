let numero = parseInt(prompt("Insira um número para a taboada"));

function geraTaboada(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
        }    
    }


geraTaboada(numero);
