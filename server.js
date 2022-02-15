const express = require('express');

const app = express();

app.get('/',(req,res) =>{
              res.send('<h1>HanHan Lion Loves Rabbit Baby.</h1>');
});
             
app.listen(5000,() => {
    console.log('app is listening on port 5000');
});
