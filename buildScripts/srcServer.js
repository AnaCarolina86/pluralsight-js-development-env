//I can change here, using import express
// jshint esversion: 6

const express = require('express');
const path = require('path');
const open = require('open');

import  webpack  from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

//it is to integrate Express with webpack
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath

}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  }
  else{
    open('http://localhost:' + port);
  }
});
