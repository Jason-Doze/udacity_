<!-- initialize the project with a Json file -->
npm init

<!-- initialize the npm -->
npm install

<!-- install typescript -->
npm i typescript

<!-- install the typescript compiler -->
npx tsc --init 


<!-- install express -->
npm i express

<!-- install type definitions for express -->
npm i --save-dev @types/express

<!-- install nodemon, allows to run the server in the background -->
npm i --save-dev nodemon

<!-- add a start script for nodemon in the package.json file -->
"start": "nodemon src/index.ts"

Import express into index.ts
import express from 'express';

Create your application object with express()
const app = express();

Set a port
const port = 3000;

Add an API endpoint to get a route, then send a response to the browser
app.get('/api', (req, res) => {
 res.send('Hello, world!');
});

Set your application to listen on your port and output a message to the console with app.listen
app.listen(port, ()=> {
 console.log(`server started at localhost:${port}`)
});

Run npm run start to see the application start in development mode.

