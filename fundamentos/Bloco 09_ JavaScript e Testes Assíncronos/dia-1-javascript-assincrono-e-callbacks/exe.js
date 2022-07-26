// 1 - A, B, C
// 2 - A, C, B

const getPlanet = () => {
    const mars = {
        name: "Mars",
        distanceFromSun: {
            value: 227900000,
            measurementUnit: "kilometers",
        },
    };
    console.log("Returned planet: ", mars);
};

; // imprime Marte depois de 4 segundos
// setTimeout(() => getPlanet(), 4000);


const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = (param) => setTimeout(() =>
    (param(getMarsTemperature())), messageDelay());
const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9 / 5) + 32;

const temperatureInFahrenheit = (temperature) =>
    console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
    console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...

sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo