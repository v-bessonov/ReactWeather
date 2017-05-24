var express = require('express');

var app = express();

const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
  if(req.headers['x-forward-proto'] === 'http'){
    next();
  }else {
    res.redirect('https://' + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Server is up on port ' + PORT);
});
