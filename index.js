
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const api = require('./api');

app.use(express.json());
app.use('/api', api);

mongoose.connect('mongodb+srv://userdb1:userdb1@cluster-twitter.rwbcf.mongodb.net/cluster-twitter?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{
    console.log("Conectado a la base de datos");
});

app.listen(3000, () => {
    console.log("Servidor iniciado");
});
