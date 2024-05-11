var express = require('express');
var  app = express();

app.get('/', function(req, res){
    console.log("Requisição GET");
    res.send('Olá Mundo');
})

app.post('/', function(req, res){
    console.log("Requisição POST");
    res.send('Olá POST');
})

app.get('/medo', function(req, res){
    console.log("Requisição MEDO");
    res.send('Medo');
})

app.delete('/apagar', function(req, res){
    console.log("Requisição DELETE");
    res.send('Apagar');
})

app.get('/listar', function(req, res){
    console.log("Requisição GET com listing");
    res.send('Olá Listar');
})

var server = app.listen(8081, function(){
    var host = server.address().address;
    var porta = server.address().port;
    console.log("Exemplo de aplicativo no endereço: %s %s", host, porta);
})

