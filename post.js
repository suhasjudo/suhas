const http = require('http');
const qs = require('querystring');
const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const collection=require("./mongodb")

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', async () => {
      const formData = qs.parse(body);
      const data={
          fname:formData.fname,
          lname:formData.lname,
          email:formData.email,
          phn:formData.phn
      }
      await collection.insertMany([data]);
      res.write("success");
      res.writeHead(600, {'Content-Type': 'text/html'});
      console.log(`Name: ${formData.fname} \nlName: ${formData.lname} \nEmail: ${formData.email} \nPhone number: ${formData.phn}`);
      res.end(`Name: ${formData.fname} \nlName: ${formData.lname} \nEmail: ${formData.email} \nPhone number: ${formData.phn} `);
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
      not correct
    `);
  }
});

server.listen(4001, () => {
  console.log('Server running on port 4001');
});