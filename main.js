/**
 * Created by marcofalsitta on 17.03.18.
 * InterSides.net
 *
 */
'use strict';

/**
 * Created by marcofalsitta on 16.03.18.
 * InterSides.net
 *
 */
'use strict';
let cmd = require('node-cmd');

const express = require('express');
const app = express();

app.get('*', (req, res, next) =>{
  console.log('url: ', req.url);
next();
});

app.get('/', (req, res) =>{
  res.send('Hello Camera Server!')
});

app.get('/camera-test', (req, res)=>{

  cmd.get('pwd',
  function(err, data, stderr){
    if(err){
      res.json({msg:"could not complete because of an error", err:err});
    }
    else{

      console.log('data is : ',data);
      console.log('stderr is : ',stderr);

      res.json({msg:"command successful", data:data});

    }
  }
);



});



//app.get('/busca', (req, res)=>{
//
//  cmd.get(
//  'sudo python ~/busca.py',
//  function(err, data, stderr){
//    if(err){
//      res.json({msg:"could not complete because of an error", err:err});
//    }
//    else{
//
//      console.log('data is : ',data);
//      console.log('stderr is : ',stderr);
//
//      res.json({msg:"command successful", data:data});
//
//    }
//  }
//);
//
//});

//app.get('/control-led', (req, res)=>{
//
//  cmd.get(
//  'sudo python ~/led.py',
//  function(err, data, stderr){
//    if(err){
//      res.json({msg:"could not complete because of an error", err:err});
//    }
//    else{
//
//      console.log('data is : ',data);
//      console.log('stderr is : ',stderr);
//
//      res.json({msg:"command successful", data:data});
//
//    }
//  }
//);
//
//
//});

app.listen(3000, ()=>{
  console.log('Example app listening on port 3000!');
});