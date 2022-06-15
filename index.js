document.getElementById('btn-calc').addEventListener('click', Calcular);

function CheckInt(num1, num2){;
  if (isNaN(num1)){
    throw new Error(`[sum] Impossible to sum ${num1} + ${num2}`);
  }
  if (num1<0){
    throw new Error(`[sum] Impossible to sum ${num1} + ${num2}`);
  }
  if (isNaN(num2)){
    throw new Error(`[sum] Impossible to sum ${num1} + ${num2}`);
  }
  if (num2<0){
    throw new Error(`[sum] Impossible to sum ${num1} + ${num2}`);
  }
  if (num1-parseInt(num1, 10)>0){ // os dois números são inteiros positivos. Não precisa do Math.abs()
    throw new Error(`[sum] Impossible to sum ${num1} + ${num2}`);
  }
  if (num2-parseInt(num2, 10)>0){
    throw new Error(`[sum] Impossible to sum ${num1} + ${num2}`);
  }
}

function Calcular() {
  const operador = 'soma';
  const resultFinal= document.querySelector('#h3-result');
  const num1 = parseFloat(document.querySelector('#num1').value);
  const num2 = parseFloat(document.querySelector('#num2').value);
  let result;

  try{
    CheckInt(num1,num2);
  } catch (errorMsg) {
    resultFinal.textContent=errorMsg;
    return false;
  } 

  result = somar(num1,num2);
  resultFinal.textContent=`Resultado: ${result}`;
} 

function somar(operando1,operando2){
  return (operando1 + operando2);
}
