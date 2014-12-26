var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/test', function (req, res) {
    var first = parseFloat(req.query.first) || 0;
    var second = parseFloat(req.query.second) || 0;
    var sum = first + second;
    res.json({
        first: first,
        second: second,
        sum: sum,
        sumExp: sum.toExponential()
    });
});

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
})