let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};
leitor.fullname = leitor.nome + " " + leitor.sobrenome

console.log("O livro favorito de " + leitor.fullname + " se chama "
    + "'" + leitor.livrosFavoritos.titulo + "'");