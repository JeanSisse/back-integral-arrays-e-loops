const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

function fila_de_banco(filaDeDentro, filaDeFora) {
	
	while(filaDeFora.length > 0 && filaDeDentro.length < 5){
		filaDeDentro.push(filaDeFora[0]);
		filaDeFora.shift();
	}

	console.log(filaDeDentro);
	console.log(filaDeFora);
}

fila_de_banco(filaDeDentro, filaDeFora);