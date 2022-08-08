const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;


app.use(express.json());
app.use(bodyParser.json());

/**
 * URL: https://localhost:4000/
 * Method: GET
 */ 
app.get('/', (req, res) => {
  console.log("-----------GET-----------");
  console.log("HEADERS", JSON.stringify(req.headers));
  console.log("PARAMS", JSON.stringify(req.params));
  res.send('Hello!');
  console.log("-------------------------");
});

/**
 * URL: URL: https://localhost:4000/get
 * Method: GET
 */ 
app.get('/get', (req, res) => {
  console.log("-----------GET-----------");
  console.log("HEADERS", JSON.stringify(req.headers));
  console.log("PARAMS", JSON.stringify(req.params));
  res.send('Completed GET!');
  console.log("-------------------------");
});

/**
 * URL: URL: https://localhost:4000/post
 * Method: POST
 */ 
app.post('/post', (req, res) => {
  console.log("-----------POST-----------");
  console.log("HEADERS", JSON.stringify(req.headers));
  console.log("PARAMS", JSON.stringify(req.params));
  console.log("BODY", JSON.stringify(req.body));
  res.send(`Completed POST! ${JSON.stringify(req.body)}`);
  console.log("--------------------------");
});

/**
 * URL: URL: https://localhost:4000/put
 * Method: PUT
 */ 
app.put('/put', (req, res) => {
  console.log("-----------PUT-----------");
  console.log("HEADERS", JSON.stringify(req.headers));
  console.log("PARAMS", JSON.stringify(req.params));
  console.log("BODY", JSON.stringify(req.body));
  res.send(`Completed PUT! ${JSON.stringify(req.body)}`);
  console.log("-------------------------");
});

app.listen(port, () => {
  console.log(`Webhook Test is running on port: ${port}`);
});
