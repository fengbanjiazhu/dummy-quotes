import React from "react";
import { Route } from "react-router-dom";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

function QuoteDetail() {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote Detail page</h1>
      <p>{params.quoteId}</p>

      {/* <Route path="/quotes/:quoteId/comments"> */}

      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
}

export default QuoteDetail;
