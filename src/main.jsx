import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "materialize-css/dist/css/materialize.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </React.StrictMode>
);
