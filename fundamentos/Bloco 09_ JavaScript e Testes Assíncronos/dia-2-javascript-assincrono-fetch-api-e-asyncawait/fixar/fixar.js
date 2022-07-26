// 1 - O que é um código que é executado de modo assíncrono?
// Qual é a diferença disso para um código que é executado de modo síncrono?
// R : Um código async é um tipo de código que roda sózinho, sem a necessidade de
// esperar outras aplicações. Ele se diferencia do código sincrono, na parte em que
// o async pode rodar em pararelo, sem travar o fluxo do código.

// 2 - Quando você tem que enfileirar várias callbacks, que problema surge?
// R: Surge o famigerado callback hell. 

// 3 - Por que as Promises são uma forma de resolver esse problema?
// R: As promises são uma forma de assincronicidade. Além disso, as promisses
// tem controle extra sobre o fluxo da aplicação, e elas também são feitas de uma
// forma distinta.

// 4 - Quando você vai se comunicar com uma API, 
// tal comunicação deve ser síncrona ou assíncrona?
// Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno,
// pode estar fora do ar etc.
// R: API's devem ser chamadas de forma assíncrona. Para que a aplicação
// não sofra com o tempo de espera.


// 5 - Dada a resposta anterior, o que é fetch e para que ele serve?
// R: O fetch é uma função que recebe uma url, e opcionalmente, um objeto. 
// uma de suas funções é chamar API's, ler links, etc...