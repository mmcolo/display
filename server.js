const express = require('express'); 
const http = require('http');
const app = express();
var path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

var app_path = '/dist';

//Mise en place des autorisation pour palier au problement d'accessibilité liée au CORS.
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Header', 'Origin, X-requested-With, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow','GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname+app_path));

app.get('/*', (req, res)=>{
    res.sendFile(path.join(__dirname+app_path+'/index.html'));
});
app.listen(PORT,()=>console.log(`Listen on ${PORT}`));