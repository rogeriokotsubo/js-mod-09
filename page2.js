document.getElementById('btn-calc').addEventListener('click', Calcular);
const operador = 'soma';
const resultFinal= document.querySelector('#h3-result');

let diff = 0;
let sum  = 0;

function CheckInt(num1, num2){;
  if (isNaN(num1)){
    throw new Error(`[subtract] Impossible to subtract ${num1} - ${num2}`);
  }
  if (num1<0){
    throw new Error(`[subtract] Impossible to subtract ${num1} - ${num2}`);
  }
  if (isNaN(num2)){
    throw new Error(`[subtract] Impossible to subtract ${num1} - ${num2}`);
  }
  if (num2<0){
    throw new Error(`[subtract] Impossible to subtract ${num1} - ${num2}`);
  }
  if (num1-parseInt(num1, 10)>0){ // os dois números são inteiros positivos. Não precisa do Math.abs()
    throw new Error(`[subtract] Impossible to subtract ${num1} - ${num2}`);
  }
  if (num2-parseInt(num2, 10)>0){
    throw new Error(`[subtract] Impossible to subtract ${num1} - ${num2}`);
  }
  if (num2>num1){
    throw new Error(`[subtract] Impossible to subtract ${num1} - ${num2}`);
  }
}

function Calcular() {
  const num1 = parseFloat(document.querySelector('#num1').value);
  const num2 = parseFloat(document.querySelector('#num2').value);
 
  diff = 0;
  sum  = 0;

  try{
    CheckInt(num1,num2);
  } catch (errorMsg) {
    resultFinal.textContent=errorMsg;
    return false;
  } 

  subtrair(num1,num2);

  resultFinal.textContent=`Resultado: ${diff}`;
} 

function subtrair(num1,num2){
    if (num2<num1){
      sum  = somar(num2,1);       // incrementador num2
      diff = somar(diff,1);       // resultado da subtração
      subtrair(num1,sum);
    }
}

function somar(operando1,operando2){
  return (operando1 + operando2);
}


