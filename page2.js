document.getElementById('btn-calc').addEventListener('click', Calcular);
const operador = 'soma';
const resultFinal= document.querySelector('#h3-result');

let diff = 0;
let sum  = 0;
let factor = 0;

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
  if (num1>9000000000000000){
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
  factor = 0;

  try{
    CheckInt(num1,num2);
  } catch (errorMsg) {
    resultFinal.textContent=errorMsg;
    return false;
  } 

  subtrair(num1,num2);

  resultFinal.textContent=`Resultado: ${diff}`;
} 

function subtrair(num1,num2){             // limite: num1>9.000.000.000.000.000
  let factorTmp = 0;
  let sumTmp = 0;

  if (num2<num1){
    if (factor===0){
      factorTmp = 1;        // incrementador tmp dobra a cada interação
    } else {
      factorTmp = somar(factor,factor);
    }
    sumTmp  = somar(num2,factorTmp);       
    if (sumTmp>num1){                     // testando incrementador tmp
      factor = 1;                         // se soma > num1, volta para 1
    } else {                              // e voltando a dobrar
      factor = factorTmp;                 
    }
    sum  = somar(num2,factor);       // incrementador num2
    diff = somar(diff,factor);       // resultado da subtração
    subtrair(num1,sum);
  }
}

function somar(operando1,operando2){
  return (operando1 + operando2);
}


