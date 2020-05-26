'use strict';



// acho que utilizar o express, é mais prático. 
const fetch = require('node-fetch')
var express = require('express');
var app = express();
const axios = require('axios')
// app.use(express.json());

// fetch('http://localhost:8888/mock-api/V1/categories/list.json')
//   .then(function (resp) {
//     return resp.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })


app.use(express.static('../webjump'));
app.listen(8888);
console.log('acesse http://localhost:8888' + ' -- Caso o Redirecionamento automático estiver desabilitado em seu navegador, acesse: http://localhost:8888/public')


