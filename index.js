const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => res.send('Hello World!'));

app.get('/main', (req, res) => {
  res.send('GET request to the mainpage')
});

app.get('/blog/:artigo?', (req, res) => {

  const artigo = req.params.artigo;

  artigo ? res.send('Artigo: ' + artigo) : res.send('Bem vindo ao meu blog');


});

app.get('/ola/:nome', (req, res) => {
  const nome = req.params.nome;
  res.send('ola, ' + nome)
})

app.get('/youtube', (req, res) => {
  const canal = req.query["canal"]

  canal ? res.send("canal: "+ canal) : res.send('Não selecionou canal');

  
})

app.listen(port, () => console.log(`started`));