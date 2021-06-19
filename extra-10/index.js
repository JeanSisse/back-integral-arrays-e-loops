const numeros = [1, 4, 29, 42, 4, 13, 52];

function achar_maior_diferenca(arrayDeNumeros) {
	let maior = -1111111111111;
	let menor = 11111111111111;

	for (let x of arrayDeNumeros){
		if (x > maior) {
			maior = x;
		}
		if (x < menor) {
			menor = x;
		}
	}

	return (maior - menor);
}

console.log(achar_maior_diferenca(numeros));