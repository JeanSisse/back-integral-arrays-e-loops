const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

function separar_pares_dos_impares(original, pares, impares) {
	
	for(let x of original){
		if (x % 2 === 0)
			pares.push(x);
		else
			impares.push(x);
	}
	console.log(pares)
	console.log(impares);

	// for(let x = 0; x < original.length; x++){
	// 	if (original[x] % 2 === 0)
	// 		pares.push(x);
	// 	else
	// 		impares.push(x);
	// }
	// console.log(pares)
	// console.log(impares);

	// let x = 0;
	// while(x < (original.length - 1)){
	// 	if (original[x] % 2 === 0)
	// 		pares.push(x);
	// 	else
	// 		impares.push(x);
	// 	x++;
	// }
	// console.log(pares)
	// console.log(impares);
}

separar_pares_dos_impares(original, pares, impares);