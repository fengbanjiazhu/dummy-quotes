import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Jeff",
    text: "Learning react is fun!",
  },
  {
    id: "q2",
    author: "Jack",
    text: "Learning react is great!",
  },
];

function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>;
}

export default AllQuotes;
