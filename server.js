// Here we require/import the HTTP module
var http = require("http");

// Here we define a port to listen to
var PORTONE = 7000;
var PORTTWO = 7500;

// Here we create a generic function to handle requests and responses
function portOneRequest(request, response){
    response.end('You are wonderful!');
}

function portTwoRequest(request, response){
    response.end('You are terrible.');
}

//function handleRequest(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
//   response.end("It Works!! Path Hit: " + request.url);
// }

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
//var server = http.createServer(handleRequest);

var serverOne = http.createServer(portOneRequest);
var serverTwo = http.createServer(portTwoRequest);


// Here we start our server so that it can begin listening to client requests.
// server.listen(PORT, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
//     console.log("Server listening on: http://localhost:%s", PORT);

// });
serverOne.listen(PORTONE,function(){
    console.log("Server listening on: http://localhost:%s", PORTONE);
});

serverTwo.listen(PORTTWO,function(){
    console.log("Server listening on: http://localhost:%s", PORTTWO);
});