import express from "express";
// import routes from './routes/index';
// import File from './file';

const app = express();
const port = 3000;

app.get("/api", (req, res) => {
  res.send("Helloooooooooooo");
});

app.listen(port, async (): Promise<void> => {
  console.log(`server started at localhost{$port}`)
})

export default app;