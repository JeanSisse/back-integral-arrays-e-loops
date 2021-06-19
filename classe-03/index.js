const numeros = [54, 22, 14, 87, 10, 284];
let encontrado = false;

function encontre_o_numero(arrayDeNumeros) {
	for (let x = 0; x < arrayDeNumeros.length; x++){
		if (arrayDeNumeros[x] === 10) {
			return x;
		}
	}

	return -1;
}

console.log(encontre_o_numero(numeros));