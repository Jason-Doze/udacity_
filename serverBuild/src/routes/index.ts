/*
The code starts by importing the express library.
Then it creates a new routes object that is an instance of the Express Router class.
Next, there is a route called "/" which handles all requests to this endpoint.
The first parameter passed into the function is req and the second parameter passed in is res .
The first thing that happens when you call this route with your browser or any other HTTP client (e.g., curl) is that "main api route!"
will be sent back as response body for every request made to / .
The code will create a router for the express framework.
The code will then define a route that when called, will send back "main api route!" */

import express from "express";
import teachers from "./api/teachers";
import students from "./api/students";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("main api route!");
});

routes.use("/teachers", teachers);
routes.use("/students", students);

export default routes;
