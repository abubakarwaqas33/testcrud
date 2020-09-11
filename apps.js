// console.log('Hello world');
// var time=0;
// var call= setInterval(function(){

//     time+=2;
//     console.log(time);
// },2000)


// var object=require('./counter');
// var events= require('events');

// var emitter= new events.EventEmitter();

// emitter.on('someEvent',function(msg){
//     console.log(msg)
// })


// emitter.emit('someEvent','Hello World here !')
//console.log(object.counter(object.values))


var http= require('http');
var fs= require('fs');

var server=http.createServer(function(req, res){

    console.log('url requirest hit by'+req.url)
    res.writeHead(200,{'content-type':'text/html'})
    var myreadStream=fs.createReadStream(__dirname+'/index.html','utf-8');
    myreadStream.pipe(res);

})

server.listen(3000,'127.0.0.1');
console.log('Server is running');