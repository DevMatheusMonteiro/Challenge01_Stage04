let numberOne, numberTwo, operation;

numberOne = Number(prompt("Digite o primeiro número"));

operation = prompt(`
Informe a operação desejada:
+: soma
-: subração
*: multiplicação
/: divisão
%: resto da divisão`);

numberTwo = Number(prompt("Digite o segundo número"));

let keepRunning = true;
let result;

while (keepRunning) {
  switch (operation) {
    case "+":
      result = numberOne + numberTwo;
      alert("A soma é: " + result);
      keepRunning = false;
      break;

    case "-":
      result = numberOne - numberTwo;
      alert("A subtração é: " + result);
      keepRunning = false;
      break;

    case "*":
      result = numberOne * numberTwo;
      alert("A multiplicação é: " + result);
      keepRunning = false;
      break;

    case "/":
      if (numberTwo != 0) {
        result = numberOne / numberTwo;
        alert("A divisão é: " + result);
        keepRunning = false;
      } else {
        alert("Não é possível dividir por 0");
      }
      break;

    case "%":
      if (numberTwo != 0) {
        result = numberOne % numberTwo;
        alert("O resto da divisão é: " + result);
        keepRunning = false;
      } else {
        alert("Não é possível dividir por 0");
      }
      break;

    default:
      alert("Operação inválida, tente novamente!");
      break;
  }
}

if (numberOne == numberTwo) {
  alert(`O primeiro número(${numberOne}) é igual ao segundo(${numberTwo}).`);
} else {
  alert(
    `O primeiro número(${numberOne}) é diferente do segundo(${numberTwo}).`
  );
}

if (result % 2 == 0) {
  alert(`O resultado(${result}) é par`);
} else {
  alert(`O resultado(${result}) é ímpar`);
}
