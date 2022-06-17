document.getElementById('btn-calc').addEventListener('click', Calcular);
const operador = 'soma';
const resultFinal= document.querySelector('#h3-result');
let diff = 0;
let sum  = 0;
let resMult = 0;
let times = 0;
let factor = 0;
let timesFactor = 0;

function CheckInt(num1, num2){;
  if (isNaN(num1)){
    throw new Error(`[multiply] Impossible to multiply ${num1} * ${num2}`);
  }
  if (num1<0){
    throw new Error(`[multiply] Impossible to multiply ${num1} * ${num2}`);
  }
  if (isNaN(num2)){
    throw new Error(`[multiply] Impossible to multiply ${num1} * ${num2}`);
  }
  if (num2<0){
    throw new Error(`[multiply] Impossible to multiply ${num1} * ${num2}`);
  }
  if (num1-parseInt(num1, 10)>0){ // os dois números são inteiros positivos. Não precisa do Math.abs()
    throw new Error(`[multiply] Impossible to multiply ${num1} * ${num2}`);
  }
  if (num2-parseInt(num2, 10)>0){
    throw new Error(`[multiply] Impossible to multiply ${num1} * ${num2}`);
  }
  if (num1>99999999 || num2>99999999){
    throw new Error(`[multiply] Impossible to multiply ${num1} * ${num2}`);
  }
  if (num1>15000000 && num2>15000000){
    throw new Error(`[multiply] Impossible to multiply ${num1} * ${num2}`);
  }

  // if (num2>num1){
  //   throw new Error(`[multiply] Impossible to multiply ${num1} * ${num2}`);
  // }
}

function Calcular() {
  const num1 = parseFloat(document.querySelector('#num1').value);
  const num2 = parseFloat(document.querySelector('#num2').value);
 
  try{
    CheckInt(num1,num2);
  } catch (errorMsg) {
    resultFinal.textContent=errorMsg;
    return false;
  } 

  diff = 0;
  sum  = 0;
  resMult = 0;
  times = 0;
  factor = 0 ;
  timesFactor = 0;

  if (num1==0 || num2==0){
    resMult = 0;
  } else { 
    if (num1<num2){
      multiplicar(num2,num1);
    } else {
      multiplicar(num1,num2);
    }  
  }
  
  resultFinal.textContent=`Resultado: ${resMult}`;
} 

function multiplicar(num1,num2){
  let factorTmp = 0;
  let sumTmp = 0;
  factor = 0;
  sum = 0;

  if (timesFactor<num2){
    diff = 0;
    factor = 0;
    sum = 0;
    subtrair(num2,timesFactor);
    factorTmp = diff;
    if (factorTmp>8192){
      factorTmp = 8192;  
    }
    times = 0;
    multiplicarAte8192(num1,factorTmp);
    timesFactor = somar(timesFactor,times);

    if (timesFactor<num2){
      multiplicar(num1,num2);
    }
  }
}

function multiplicarAte8192(num1,num2){
  if (times<num2){
    resMult = somar(resMult,num1);  // resultado da multiplicação
    times = somar(times,1);       // contador número de somas
    multiplicarAte8192(num1,num2);
  }
}


function subtrair(num1,num2){
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


