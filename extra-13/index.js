const disjuntores = [false, false, true, false, false, true, false, false];

function verificando_disjuntores(disjuntores) {
	for (let x = 0; x < disjuntores.length; x++){
		if (disjuntores[x]) {
			console.log(x)
		}
	}
}

verificando_disjuntores(disjuntores);