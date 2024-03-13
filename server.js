import express from "express";
import getRandomQuote from "./quotes/get-random-quote.js";

const app = express();

app.get("/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
