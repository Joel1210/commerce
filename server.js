const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public/dist/public'));


const path = require('path');

require('./server/routes')(app)

app.listen(8000, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("listening on 8000")
    }
})