import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

type Props = {};

const ErrorPage = (props: Props) => {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.status}</i>
        </p>
      </div>
    );
  }
  return <p>{"Unknown Error"}</p>;
};

export default ErrorPage;
