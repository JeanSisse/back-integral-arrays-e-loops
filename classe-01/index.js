const numeros = [2, 3, 4, 6];
let soma = 0;

for (let x of numeros){
	soma += x;
}

console.log(`A soma de todos os numeros desse array é ${soma}`);