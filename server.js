const port = 3000;
const express = require('express');
const bodyParser = require('body-parser');
const m = require('./main');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  m.main().then(
    (data) => {
      res.status(200).json(data);
    }
  );
});

//unnecessary can be removed
//test api  only since subtext api is not reliable
app.get('/subTexts', (req, res) => {
  var text = {
    "subTexts": ["Peter", "peter", "Pick", "Pi", "Z"]
  };
  res.status(200).json(text);
});

//unnecessary can be removed
// test api for postresult api since api provided is not reliable
app.post('/postresults', (req, res) => {
  res.status(200).send(req.body);
});


app.listen(port, () => {
  console.log('started at port ', 3000);
});
