let soma = 0;

for (let i = 1; i <= 5; i++) {
    let nota = Number(prompt("Digite uma nota:"));
    soma = soma + nota;
}

let media = soma / 5;

alert("Média: " + media);