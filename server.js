const express = require('express');
const app = express();
const cors = require('cors');



app.use(express.static('./dist'));
app.use(cors());

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './dist'});
});

app.use((req, res, next) => {
    console.log("ALLOW CORS")
    // res.header("Access-Control-Allow-Origin", '*');
    // res.header("Access-Control-Allow-Credentials", true);
    // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(process.env.PORT || 8080);
 

module.exports = app;