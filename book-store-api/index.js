const express = require("express");
const bookRoutes = require("./routers/book");

const server = express();

server.listen(3100);

server.get('/api/Book', bookRoutes);

server.get("/", (req, res)=>{
        res.send("Hello from Express Js");
})

console.log("Server listening on localhost 3100");