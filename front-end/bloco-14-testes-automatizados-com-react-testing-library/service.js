const randomNumberBetween0and100 = () =>
    Math.floor(Math.random() * (100 - 0));

const capsLock = (str) => str.toUpperCase();

const firstLetter = (str) => str[0];

const concat = (str1, str2) => str1.concat(str2);

const fetchDog = async () => {
    const URL = "https://dog.ceo/api/breeds/image/random";
    const response = await fetch(URL);
    const data = response.json();
    return data;
}

module.exports = {
    randomNumberBetween0and100,
    capsLock,
    firstLetter,
    concat,
    fetchDog,
}
