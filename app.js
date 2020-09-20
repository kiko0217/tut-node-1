// var http = require("http");
// // var foo = function (req, res) {

// // }
// var body = 'this is the body of dresponse'
// var content_length = body.length;
// http.createServer(function (req, res) {
//     res.writeHead(200, {
//         'Content-Type'      : 'text/plain',
//         'Content-Length'    : content_length
//     })
//     res.end(body)
// }).listen(3000);

// console.log("server is running on http://127.0.0.1:3000")

// var time = 0
// var timer = setInterval(function() {
//     time += 2
//     console.log(time+' sec have passed')
//     if (time > 7 ) {
//         clearInterval(timer)
//     }
// }, 2000)

// console.log(__dirname)
// console.log(__filename)

var hello = require('./hello')

console.log(hello.sayHelloInSpanish())