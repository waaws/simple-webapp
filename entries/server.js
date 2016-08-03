import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import express from 'express';
import app from '../app';

const port = process.env.PORT || 3045;
const server = express();

server.get('/',(req,res)=>{
  fs.readFile(path.resolve(__dirname,'../app/index.html'),function(err,file){
    let $ = cheerio.load(file.toString());
    $('#app').html(app.toString('/',{
      app:{
        todo:['server']
      }
    }));
    res.send($.html());
  });
})

server.get('/build/main.js',(req,res)=>{
  res.sendFile(path.resolve(__dirname, '../build/main.js'))
})

server.listen(port,function(){
  console.log(port);
})
