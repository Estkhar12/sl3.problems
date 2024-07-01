import express from "express";
import router from "./src/route.js";
const app = express();

app.use(express.json());

app.use("/api", router);


const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

