const original = [1, 4, 12, 21, 53, 88, 112];


function filtrar_numero_pares(arrayOriginal) {
	let newArray = [];
	
	for (let x of arrayOriginal){
		if (x%2 === 0) {
			newArray.push(x);
		}
	}
	return newArray;
}

console.log(filtrar_numero_pares(original));