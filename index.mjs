import Express  from "express";
import bodyParser from "body-parser";
import { startConnection } from "./src/mongo/index.mjs";
import FiltersRouter from "./src/handlers/filters/index.mjs";

const app = Express();
app.use(bodyParser.json());

const PORT = 3000;

app.get("/", (req, res) =>{
  res.send("OK")
})

app.use("/images", FiltersRouter);

const startServer = async () => {
  await startConnection();

  app.listen(PORT, () => {
    console.log("http://localhost:3000")
  })
}

startServer();
