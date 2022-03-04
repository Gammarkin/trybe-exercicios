const isValueNull = (value1, value2) => {
    if (!value1 || !value2) throw new Error('Um ou mais valores estão faltando.');
}

const isValueNumber = (value1, value2) => {
    if (isNaN(value1) | isNaN(value2)) throw new Error('Um ou mais dos valores não são números.')
}

function sum() {
    try {
        const value1 = document.getElementById('value1').value;
        const value2 = document.getElementById('value2').value;
        isValueNumber(value1, value2);
        isValueNull(value1, value2)
        const result = parseInt(value1) + parseInt(value2);
        document.getElementById('result').innerHTML = `Resultado: ${result}`;
    }
    catch (e) {
        document.getElementById('result').innerHTML = `Erro: ${e.message}`;

    }

    finally {
        document.getElementById('value1').value = '';
        document.getElementById('value2').value = '';
    }
}
window.onload = () => {
    const button = document.getElementById("button");
    button.addEventListener("click", sum);
};
