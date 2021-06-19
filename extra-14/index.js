const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

function imprima_menor_da_posicao_entre_arrays(arrayA, arrayB) {
	for (let x = 0; x < arrayA.length; x++){
		if (arrayA[x] < arrayB[x])
			console.log(arrayA[x]);
		else
			console.log(arrayB[x]);
	}
}

imprima_menor_da_posicao_entre_arrays(arrayA, arrayB);