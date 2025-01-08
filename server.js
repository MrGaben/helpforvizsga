const express = require("express")
const router = express.Router()
const http = require("http");
const server = http.createServer((req,res) =>{
    res.writeHead(200,{
        'content-type':'application.json'
});
res.end(JSON.stringify({data:"hello node"}));
});
require("dotenv").config();
const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`server run ${port}`));