const numeros = [3, 24, 1, 8, 11, 7, 15];

function encontre_o_maior(arrayDeNumeros) {
	let maior = -10000000000;

	for (let x of arrayDeNumeros){
		if (x > maior){
			maior = x;
		}
	}

	return maior;
}

console.log(encontre_o_maior(numeros));