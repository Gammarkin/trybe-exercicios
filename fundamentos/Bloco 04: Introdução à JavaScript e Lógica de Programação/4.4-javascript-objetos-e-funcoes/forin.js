let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "sim"
};



let infoDois = {
    personagem: 'Tio Patinhas',
    origem: 'christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: "sim"
};

for (let key in info, infoDois) {
    console.log(info[key], infoDois[key]);
}

/*console.log("Bem-vinda,", info.personagem);*/