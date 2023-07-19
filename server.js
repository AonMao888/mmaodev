const express = require("express");
const ejs = require('ejs');
const app = express();

app.set('views','/views')
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('home')
})

app.listen(80,()=>{
    console.log('server started with port 3000')
})