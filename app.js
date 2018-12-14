const express = require('express');
var exphbs  = require('express-handlebars');

const translate = require('translate-google');


 
var app = express();
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('index');
});


app.get('/:lang/:name', (req, res) => {
  
    translate(`${req.params.name}` , {to:`${req.params.lang}`}).then(rel => {

        res.json(rel);

    });


})
const port = 3000 || process.env.PORT;
app.listen(port, function(){
console.log(`app started on port ${port}`)
});