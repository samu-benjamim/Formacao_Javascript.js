const entradas = [5.5,2,10,3,7,6,8];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
} 

module.exports = {gets, print};
