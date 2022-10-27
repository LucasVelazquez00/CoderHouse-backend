/* const http = require('http');
const server = http.createServer();
server.on('request', procesa);
server.listen(3000);
console.log('//localhost:3000');

function procesa (request, response) {
    let url = request.url;
    console.log(`URL solicitada ${url}`);
    response.end('Hola');
} */
const express = require('express');

const Contenedor = require('./desafio');

const app = express();

const PORT = 8080;

let products = null;

function init(){
    console.log('iniciando');
    products = getAllProducts();
    console.log('productos cargados: ', products);
}
app.get('/', (req, res) =>{
    res.send('hola soy el "get "/""')
})

app.get('/products', (req, res) => {
    res.send(products);
})

app.get('/productsRandom', (req, res) => {
    res.send(getProductRandom());
})

function getAllProducts(){
    const container = new Contenedor();
    
    const file = './products.txt';
    const products = container.read(file);
    return products
}

function getAllProducts(){
    const container = new Contenedor ();
    const file = './products.txt';
    const products = container.read(file);
    const rp = Math.floor(Math.random() * products.length);
    return products[rp]
}

init()

app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`));