const player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

player.fullName = player.name + " " + player.lastName;

console.log("A jogadora " + player.fullName + " tem "
    + player.age + " anos de idade.");
console.log("A jogadora " + player.fullName + " foi a melhor do mundo por 6 vezes."
    + " ela ganhou em " + player.bestInTheWorld);