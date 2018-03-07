const Express =require("express");

var app = Express();

const ClientFileDirectory =  __dirname + '/client';

app.get('/', function (request, response, next) {
  	var options = {
    	root: ClientFileDirectory,
    	headers: {
			'Content-Type': 'text/html',
    	}
  	};
	response.sendFile("index.html", options, function (error) {
    	if (error) next(error)
  	});
});

//	------------------------------			index					-------------------//
app.get('/:name', function (request, response, next) {
	var filename = request.params.name;
	var filetype= filename.split(".").pop();
	if(filetype==="css") filetype="text/css";
	else if(filetype==="js") filetype="application/x-javascript";
	else if(filetype==="jpg") filetype="image/jpeg";
	else if(filetype==="ico") filetype="image/x-icon";
	var options = {
    	root: ClientFileDirectory,
    	headers: { 'Content-Type': filetype }
  	};
	response.sendFile(filename, options, function (error) {
    	if (error) next(error)
  	});
});
app.get('/assets/img/:name', function (request, response, next) {
	var filename = request.params.name;
	var filetype= filename.split(".").pop();
	if(filetype==="jpg") filetype="image/jpeg";
	else if(filetype==="png") filetype="image/png";
	var options = {
    	root: ClientFileDirectory+"/assets/img",
    	headers: { 'Content-Type': filetype }
  	};
	response.sendFile(filename, options, function (error) {
    	if (error) next(error)
  	});
});
app.get('/assets/img/avatar/:name', function (request, response, next) {
	var filename = request.params.name;
	var filetype= filename.split(".").pop();
	if(filetype==="jpg") filetype="image/jpeg";
	else if(filetype==="png") filetype="image/png";
	var options = {
    	root: ClientFileDirectory+"/assets/img/avatar",
    	headers: { 'Content-Type': filetype }
  	};
	response.sendFile(filename, options, function (error) {
    	if (error) next(error)
  	});
});



app.listen(process.env.PORT || 8080);