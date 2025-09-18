const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const { PORT } = require('./config/server.config.js');

//3 input incoming format for bodyparser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.text());


//const PORT = 3000;

app.get('/ping', async (req, res) => {
    return res.json({message: 'Problem Service is alive : '});
});

app.listen(PORT, () =>{
    console.log(`Server started at PORT: ${PORT}`);
});


