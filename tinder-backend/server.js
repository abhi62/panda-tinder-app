import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

//app config

const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://tinder-admin:V2iyx8ieITa9OHOi@cluster0.kq1ol.mongodb.net/tinderdb?retryWrites=true&w=majority`;

// MIddleware
app.use(express.json());
app.use(Cors());

// db config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// api endpoint
app.get("/", (req, res) => {
  res.status(200).send("Panda Is Working");
});

app.post("/tinder/card", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send(data);
    }
  });
});
app.get("/tinder/cards", (req, res) => {
  Cards.find((error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send(data);
    }
  });
});

// listner
app.listen(port, () => {
  console.log(`listning ${port} `);
});
