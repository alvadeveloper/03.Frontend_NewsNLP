// Elementary Server Settings

var path = require('path')
const express = require('express')

const app = express()

const port = 8080;

app.use(express.static('dist'))

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');

require('dotenv').config();

// variables

let alldata = [];

let data = {};



//Aylien API

const apiID = process.env.API_ID;
const apiKey = process.env.API_KEY;

var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: apiID,
  application_key: apiKey
});

function query(a){
	textapi.sentiment({
	  'text': a
	}, 
	function(err, res) {
	if (err === null) { 
		data={
			polarity: res.polarity,
			subjectivity: res.subjectivity,
			text: res.text
		}
	alldata.unshift(data);	
	}
	});
}

//Routes

//default routes

app.get('/', function (req, res) {

    res.sendFile(path.resolve('dist/index.html'))
})


app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})

//Route to get the input from user
app.post('/test', callback);

function callback(req, res){
	const text = req.body.formText;
	query(text); 
	
}

//Route to send the JSON to user
app.get('/getresult', sendResult);

function sendResult(req, res){
	res.send(alldata);
}

function updatedata(data){
	alldata.push(data);
}


