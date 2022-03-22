// api.js
const fetchCoins = () => {
    const url = 'https://api.coincap.io/v2/assets';

    return fetch(url)
        .then((response) => response.json())
        .then((data) => data.data)
        .catch((err) => console.log(err));
}

const setCoins = async () => {
    const coins = await fetchCoins();

    const coinsList = document.getElementById('krypto');

    coins.filter((_skip, index) => index < 10)
        .forEach((coin) => {
            const li = document.createElement('li');

            li.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;

            coinsList.appendChild(li);
        });
}
setCoins();