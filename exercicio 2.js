let numero = 15;

function sequenciaFibonacci(numero){
    let a = 0, b =  1;
    while(a <= numero){
        if (a == numero){
            return true;
        }
        [a, b] = [b, a + b];
    }
    return false;
}

if (sequenciaFibonacci(numero)){
    console.log(`O numero ${numero} pertence a sequencia de fibonacci`);
}else{
    console.log(`O numero ${numero} não pertence a sequencia de fibonacci`);
}