import React, { Component } from "react";

const conteudos = [
	{
		conteudo: "High Order Functions",
		bloco: 8,
		status: "Aprendido",
	},
	{
		conteudo: "Composicao de Componentes",
		bloco: 11,
		status: "Aprendendo",
	},
	{
		conteudo: "Composicao de Estados",
		bloco: 12,
		status: "Aprenderei",
	},
	{
		conteudo: "Redux",
		bloco: 16,
		status: "Aprenderei",
	},
];

const Task = (arr) => {
	return <li>{arr}</li>;
};

const print = conteudos.map((e) =>
	Task(`O conteúdo é: ${e.conteudo}
Status: ${e.status}
Bloco: ${e.bloco}`)
);

class Content extends Component {
	render() {
		return (
			<div>
				<ul>{print}</ul>
			</div>
		);
	}
}

export default Content;
