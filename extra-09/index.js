
const filaDePedidos = ["pedido 12", "pedido 13", "pedido 14"];

function fila_de_pedidos(pedido, filaDePedidos) {
	filaDePedidos.push(pedido);
	filaDePedidos.shift();

	return filaDePedidos;
}


console.log(fila_de_pedidos("pedido 15", filaDePedidos));