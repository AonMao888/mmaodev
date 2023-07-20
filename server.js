const express = require("express");
const ejs = require('ejs');
const app = express();
require('dotenv').config();
const {createClient} = require('@supabase/supabase-js');

const supabase = createClient('https://vfdlyunuvhflycrwlmix.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmZGx5dW51dmhmbHljcndsbWl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk3ODA0NjksImV4cCI6MjAwNTM1NjQ2OX0.6H-gPgS51S6apQuIT39P0xS8mJPrV-It3FYYXspzlkU')
app.use(express.static('public'));
app.set('views',__dirname+'/views')
app.set('view engine','ejs')

//app get home
app.get('/',async(req,res)=>{
    let {data,error} = await supabase.from('students').select('*');
    res.render('home',{all:data})
})

//app get students
app.get('/students',async(req,res)=>{
    res.render('s')
})

app.listen(80,()=>{
    console.log('server started with port 80')
})