const faturamento = [
    {"dia": 1 , "valor": 0},
    {"dia": 2 , "valor": 22174},
    {"dia": 3 , "valor": 15453},
    {"dia": 4 , "valor": 24728},
    {"dia": 5 , "valor": 19846},
    {"dia": 6 , "valor": 23890},
    {"dia": 7 , "valor": 0},
];

function calcularFaturamento(faturamento) {
    let valores = faturamento
                    .map(dia => dia.valor)
                    .filter(valor => valor > 0);

    let menorValor = Math.min(...valores);
    let maiorValor = Math.max(...valores);
    let somaFaturamento = valores.reduce((acc, valor) => acc + valor, 0);
    let mediaMensal = somaFaturamento / valores.length;
    let diasAcimaDaMedia = valores.filter(valor => valor > mediaMensal).length;

    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia,
    };
}

const resultado = calcularFaturamento(faturamento);

console.log(`Menor valor de faturamento: ${resultado.menorValor}`);
console.log(`Maior valor de faturamento: ${resultado.maiorValor}`);
console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
