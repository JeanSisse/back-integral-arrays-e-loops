const nomes = ["Ana", "Joana", "Carlos", "amanda"];

function filtrar_nomes_com_A(arrayNomes) {
	let nomesComA = [];

	for (let nome of arrayNomes){
		if (nome.charAt(0) === "A" || nome.charAt(0) === "a") {
			nomesComA.push(nome);
		}
	}
	return nomesComA;
}

console.log(filtrar_nomes_com_A(nomes));