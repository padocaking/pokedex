import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./Styles/GlobalStyles";
import Providers from "./Providers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalStyles />
        <Providers />
    </React.StrictMode>
);

reportWebVitals();
