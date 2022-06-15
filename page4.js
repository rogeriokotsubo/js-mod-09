document.getElementById('btn-calc').addEventListener('click', Calcular);
const operador = 'soma';
const resultFinal= document.querySelector('#h3-result');

let diff = 0;
let sum  = 0;
let resMult = 0;
let times = 0;
let resPower = 0;
let timesPower = 0;

function CheckInt(num1, num2){;
  if (isNaN(num1)){
    throw new Error(`[Exponential] Impossible ${num1} raised to the power of ${num1}`);
  }
  if (num1<0){
    throw new Error(`[Exponential] Impossible ${num1} raised to the power of ${num1}`);
  }
  if (isNaN(num2)){
    throw new Error(`[Exponential] Impossible ${num1} raised to the power of ${num1}`);
  }
  if (num2<0){
    throw new Error(`[Exponential] Impossible ${num1} raised to the power of ${num1}`);
  }
  if (num1-parseInt(num1, 10)>0){ // os dois números são inteiros positivos. Não precisa do Math.abs()
    throw new Error(`[Exponential] Impossible ${num1} raised to the power of ${num1}`);
  }
  if (num2-parseInt(num2, 10)>0){
    throw new Error(`[Exponential] Impossible ${num1} raised to the power of ${num1}`);
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
  resPower =0;
  timesPower= 1;
  if (num1==0){
    resPower = 0;
  } else if (num2==0){ 
    resPower = 1;
  } else {  
    exponenciar(num1,num2);
  }
  
  resultFinal.textContent=`Resultado: ${resPower}`;
} 

function exponenciar(num1,num2){
  times = 0;
  resMult = 0;                           // zerando acumuladores da multiplicação
  if (timesPower<num2){
    if (timesPower==1){                 // se primeira vez, num1 * num1
      multiplicar(num1,num1);     
    } else{
      multiplicar(resPower,num1);       // se não, acumulador resPower * num1 
    }                                   // resPower acumulador das exponencial    
    resPower = resMult;                  // resSum é o resultado da multiplicação
    timesPower = somar(timesPower,1);   // contador de n vezes 
    exponenciar(num1,num2);
  }
}

function multiplicar(num1,num2){
  if (times<num2){
    resMult = somar(resMult,num1);  // resultado da multiplicação
    times = somar(times,1);       // contador número de somas
    multiplicar(num1,num2);
  }
}

function subtrair(num1,num2){
    if (num2<num1){
      sum  = somar(num2,1);        // incrementador num2
      diff = somar(diff,1);        // resultado da subtração
      subtrair(num1,sum);
    }
}

function somar(operando1,operando2){
  return (operando1 + operando2);
}


