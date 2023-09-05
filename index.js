import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app =express();
const port = 8080;
const apiKey ="ef4784355953abf4aeab0f13"
app.use(bodyParser.urlencoded({ extended: true }));
const API_URL = "https://v6.exchangerate-api.com/v6/"

app.get("/", async (req, res) => {
    try {
      const result = await axios.get(API_URL+`${apiKey}/latest/USD`);
      res.render("index.ejs", {
        inr: result.data.conversion_rates.INR,
        gbp: result.data.conversion_rates.GBP,
        cad: result.data.conversion_rates.CAD,
        aud: result.data.conversion_rates.AUD
      })
    } catch (error) {
      res.status(404).send(error.message);
    }
  });


  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  