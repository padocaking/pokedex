import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Router from "./Router/Router";
import GlobalStyles from "./Styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalStyles />
        <Router />
    </React.StrictMode>
);

reportWebVitals();
