import React from "react";
import { Route } from "react-router-dom";
import { Fragment } from "react";
import { useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

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

function QuoteDetail() {
  const match = useRouteMatch();
  const params = useParams();

  let quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    quote = { text: "Quote Not Found", author: "404" };
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>

      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
}

export default QuoteDetail;
