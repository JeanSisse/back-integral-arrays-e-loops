const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

function somando_pares(arrayDeNumeros) {
	let somaTotal = 0;

	for (let x of arrayDeNumeros){
		if (x % 2 === 0) {
			somaTotal += x;
		}
	}
	return somaTotal;
}

console.log(somando_pares(numeros));