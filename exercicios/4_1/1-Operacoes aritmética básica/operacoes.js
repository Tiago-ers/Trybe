let num1 = null;
let num2 = null;
let resulSoma = null;
let resulDiv = null;
let resulSub = null;
let resulMult = null;

num1 = Number(prompt("Informe o 1ª numero:  "));
num2 = Number(prompt("Informe o 2ª numero:  "));

resulSoma = num1 + num2;
resulSub = num1 - num2;
resulMult = num1 * num2;
resulDiv = num1 / num2;

alert("Soma = " + resulSoma + "\nSubtração = " + resulSub + "\nMultiplicação = " + resulMult + "\nDivisão = " + resulDiv.toFixed(2));