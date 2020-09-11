var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var conn = require('../config/config')


var list = ['coffee', 'milk', 'food'];
module.exports = function (app) {

    app.get('/', function (req, res) {

        conn.query('select * from company', function(error, results){
            if ( error ){
                res.status(400).send('Error in database operation');
            } else {

               res.render('list',{companies:results});
            }
        });

    });

    app.post('/list', urlencodedParser, function (req, res) {

        let sql = "INSERT INTO company SET ?";
        if (req.body.name != '') {
            conn.query(sql, { name: req.body.companyname }, (err, results) => {
                if (err) throw err;

                return res.redirect('/');

            });

        } else
           return res.send('something wrong')

    });

    app.delete('/list/:id', function (req, res) {
        res.send('delete list')
    });



}
