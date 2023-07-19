const express = require("express");
const ejs = require('ejs');
const app = express();
require('dotenv').config();
const {createClient} = require('@supabase/supabase-js');

const supabase = createClient(process.env.supabaseurl,process.env.supabasekey)

app.set('views',__dirname+'/views')
app.set('view engine','ejs')

app.get('/',async(req,res)=>{
    let {data,error} = await supabase.from('students').select('*');
    res.render('home',{all:data})
})

app.listen(80,()=>{
    console.log('server started with port 80')
})