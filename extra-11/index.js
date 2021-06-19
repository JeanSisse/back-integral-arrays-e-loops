const original = [5, 7, 13, 17, 26, 34, 118, 245];

function filtrar_numeros(arrayDeNumeros) {
	let arrayEspecial = [];

	for (let x of arrayDeNumeros){
		if ((x > 10 && x < 20) || x > 100) {
			arrayEspecial.push(x);
		}
	}

	return arrayEspecial;
}

console.log(filtrar_numeros(original));