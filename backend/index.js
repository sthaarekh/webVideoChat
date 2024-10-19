const bodyParser = require('body-parser');
const express = require('express');
const {Server} = require('socket.io');

const io = new Server();
const app = express();

app.use(bodyParser.json());

io.on('connection', (socket)=>{

});
app.listen(8000, ()=> console.log("Server running at 8080"));
io.listen(8001);