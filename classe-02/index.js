const letras = ["A", "a", "B", "C", "E", "e"];
let contador = 0;

function contando_letras(letras) {
	for (x of letras){
		if (x === "E" || x === "e") {
			contador++;
		}
	}

	if (contador == 0) 
		console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
	else if (contador > 1)
		console.log(`Foram encontradas ${contador} letras "E" ou "e".`);
	else
		console.log(`Foi encontrada ${contador} letra "E" ou "e".`);
}

contando_letras(letras);