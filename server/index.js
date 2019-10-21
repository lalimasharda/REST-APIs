//var hash = require('object-hash');
const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000;
var hashcode2 = "";
//var hashcode = Math.random().toString(36).slice(2);  

// express configuration
app.use(express.json({type: '*/*'}));

// Set your routes
app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', function (req, res) {
    
    res.send(`Received object. ${JSON.stringify(req.body)}`);
    //console.log(body);
});

app.post('/share', function (req, res) {
   
    var hashcode = Math.random().toString(36).slice(2);
    hashcode2 = hashcode;
    var newData = {
        coffee: req.body['coffee'],
        milk: req.body['milk'],
        sugar: req.body['sugar'],
        chocolate: req.body['chocolate'],
    }
    // console.debug('++++++');
    fs.writeFile('inputData.json', JSON.stringify(newData), (err) => {
        if(err){
            res.status(404).send("Data not found");
            console.debug(err);
            return;
        }
        // console.debug('-----');
        var msg = {"Success":true,"link":"http://localhost:3000/"+hashcode};
        res.send("\n"+JSON.stringify(msg)+"\n");
      });
    
});

app.get('/:id', function(req, res) {
    // console.debug("9999999");
    
    if(req.params.id!=hashcode2)
    {
        var obj = {"success":false,"error":404,"message":"Not Found"};
	    res.send("\n"+JSON.stringify(obj)+"\n");
    }
	fs.access("./inputData.json", error => {
	    if (!error) {
	    	fs.readFile('./inputData.json', 'utf8', function (err, data) {
	  			if (err) throw err;
	  			res.send("\n Data retrieved: "+data+"\n");
			});
			fs.unlink('./inputData.json', (err) => {
  				if (err) throw err;
			});	

	    } else {
	    	var obj = {"success":false,"error":404,"message":"Not Found"};
	    	res.send("\n"+JSON.stringify(obj)+"\n");
	    }
	});
	
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))