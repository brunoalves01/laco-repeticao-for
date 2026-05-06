let soma = 0;

for (let i = 1; i <= 10; i++) {
    let numero = Number(prompt("Digite um número:"));
    soma = soma + numero;
}

alert("Soma total: " + soma);