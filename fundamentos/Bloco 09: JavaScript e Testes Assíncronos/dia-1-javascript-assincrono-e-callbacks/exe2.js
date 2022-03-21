const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
}

const sendMarsTemperature = (onSuccess, onError) => {
    setTimeout(() => {
        if (Math.random() <= 0.6) onSuccess(getMarsTemperature())
        else onError('Robot is busy');
    }, messageDelay());
}
const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9 / 5) + 32;

const temperatureInFahrenheit = (temperature) =>
    console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
    console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
    console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(greet, handleError);

const pokemons = [
    {
        name: 'Bulbasaur',
        type: 'Grass',
        ability: 'Razor Leaf',
    },
    {
        name: 'Charmander',
        type: 'Fire',
        ability: 'Ember',
    },
    {
        name: 'Squirtle',
        type: 'Water',
        ability: 'Water Gun',
    },
];

function getPokemonDetails(filter, callback) {
    setTimeout(() => {
        if (pokemons.find(filter) === undefined) {
            return callback(new Error('Não temos esse pokémon para você :('), null);
        }
        const pokemon = pokemons.find(filter);

        const { name, type, ability } = pokemon;

        const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;



        callback(null, messageFromProfOak);
    }, 2000);
}


getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', (error, message) => {
    if (error) {
        console.log(error);
    } else {
        console.log(message);
    }
}
);

module.exports = {
    getPokemonDetails,
};
