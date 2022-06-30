"use strict";
/*
The code starts by importing the express module.
It then creates a new app object and assigns it to the variable "app".
Next, it sets up an HTTP server on port 3000 with the function listen().
The last line of code starts the server listening for connections from localhost:3000.
The first thing that happens in this code is that we import express from "express" so that we can use its functions.
Then, we create a new app object and assign it to the variable "app".
Next, we set up an HTTP server on port 3000 with the function listen().
Finally, when everything is ready, our program will start listening for connections from localhost:3000.
The code attempts to start a server on port 3000.
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const port = 3000;
// app.get("/api", (req, res) => {
//   res.send("Hello Fockers!");
// });
app.use("/api", index_1.default);
app.listen(port, () => {
    console.log(`server started at localhost ${port}!`);
});
