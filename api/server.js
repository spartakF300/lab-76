const express = require('express');
const messages = require('./app/messages');
const cors = require('cors');
const app = express();
const fileDb = require("./fileDb");

const port = 8000;
app.use(express.json());
app.use(cors());


app.use('/messages', messages);
fileDb.init();
app.listen(port,()=>{
   console.log('server start'+ port)
});