const express = require('express')
const port = process.env.PORT || 3000

const app = express()

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/controllers'));
app.use(express.static(__dirname + '/node_modules'));

app.get('/', (req, res)=>{
    res.sendfile('./views/gameView.html');
})


app.listen(port, 
    function (){ 
        console.log("Running in port 3000.");
    } 
)
