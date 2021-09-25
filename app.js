const express = require('express');
const path = require('path');

const router = require('./routes/router');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname , 'public')));

app.use(router);

app.use((req,res,next)=>{
  res.sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3000 , ()=>console.log('server is running on port 3000'));


