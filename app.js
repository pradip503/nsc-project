const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');


//making app to use static file
app.use(express.static(path.join(__dirname, 'public')));

//define template engine
app.set('view engine', 'handlebars');

//use default engine
app.engine('handlebars', exphbs({defaultLayout: 'home'}));

//home routes
const home = require('./routes/home/index');


app.use(home);

// creating server
const port = process.env.PORT || 4000;
app.listen(port, ()=> {
    console.log('Listening to port: ' + port);
});
