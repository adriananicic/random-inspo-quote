import quotes from "./quotes.js";

const getRandomQuote = () => {
  const position = Math.floor(Math.random() * quotes.length);
  const quote = quotes[position];
  return quote;
};

export default getRandomQuote;
