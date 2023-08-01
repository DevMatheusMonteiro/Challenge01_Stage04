let numberOne, numberTwo, operation;

let keepRunning = true;
let result;
let attempts = 0;

function numberValidation(numberOne, numberTwo) {
  let message = "Informe valores numéricos válidos!\n";

  if (isNaN(numberOne) && isNaN(numberTwo)) {
    return `${message}Os dois números estão inválidos!`;
  } else if (isNaN(numberOne)) {
    return `${message}O número um está inválido!`;
  } else {
    return `${message}O número dois está inválido!`;
  }
}

while (keepRunning) {
  numberOne = Number(prompt("Digite o primeiro número"));

  operation = prompt(`
    Informe a operação desejada:
    +: soma
    -: subração
    *: multiplicação
    /: divisão
    %: resto da divisão`);

  numberTwo = Number(prompt("Digite o segundo número"));

  if (isNaN(numberOne) || isNaN(numberTwo)) {
    alert(numberValidation(numberOne, numberTwo));
    attempts++;
  } else {
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
        attempts++;
        break;
    }
  }

  if (attempts == 3) {
    let option;

    while (option != 2 && option != 1) {
      option = Number(
        prompt(`
        Deseja continuar tentando?
        1 - Sim
        2 - Não`)
      );
      switch (option) {
        case 1:
          attempts = 0;
          break;
        case 2:
          keepRunning = false;
          break;
        default:
          alert("Opção inválida, tente novamente!");
          break;
      }
    }
  }
}

if (attempts == 3) {
  alert("Encerrado!");
} else {
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
}
