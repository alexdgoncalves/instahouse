const express = require ('express');
const sequelize = require ('sequelize');
const config = require('./config/config')

const app = express();

app.get('/movies', async(req,res)=>{
    // iniciando o banco de dados
    const con = new sequelize(config);

    // solicitando ao servidor todos filmes
    const resultMovies = await con.query('select * from movies');

    console.log(resultMovies);
});

app.listen(8888, ()=> console.log('servidor on'));

