var express = require('express'),
    app = express();

app.use('/', express.static(__dirname));
app.all('/*', function(req, res, next) {
           res.sendFile('index.html', {root: __dirname + '/app'});
});
app.listen(8080);
