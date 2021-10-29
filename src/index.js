import React from "react";
import ReactDOM from "react-dom";
import { GithubProvider } from "./context/context";
import App from "./App";

ReactDOM.render(
  <GithubProvider>
    <App />
  </GithubProvider>,
  document.getElementById("root")
);
