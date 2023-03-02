const express = require('express')
const app=express();
const PORT=8000;
require('./models/index')

app.get('/',(req, res)=>{
    res.send("Home page");
});

app.listen(PORT,()=>{
    console.log(`app is listening at port ${PORT}`);
})