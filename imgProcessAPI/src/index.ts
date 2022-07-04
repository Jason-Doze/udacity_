import express from "express";

const app = express();
const port = 3000;


app.get("/api", (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

/*
The code starts by importing the express module.
The app variable is then declared and assigned to a new instance of the express module.
Next, port is defined as 3000 and set as an environment variable for use in Express routes.
The first route that Express will call when it starts up is /api/ .
This route takes two parameters: req , which represents the request object, and res , which represents the response object.
In this case, we send back "hello world" to our client with res .
The code is the simplest way to get started with Express.
It creates a new instance of express and then calls the app.get() method, which will send back 'hello world' if successful.
app.listen(port, () => { }); The listen() method tells Express to start listening on port 3000 for incoming requests.*/