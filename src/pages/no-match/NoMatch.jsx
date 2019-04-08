import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NoMatch = () => (
  <Fragment>
    <h1>404. Not found</h1>
    <p>Sorry, but requested page is not found.</p>
    <p>
      <Link to="/">Login page</Link>
    </p>
  </Fragment>
);

export default NoMatch;
