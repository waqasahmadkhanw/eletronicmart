import React from "react";
import ReactDOM from "react-dom/client";
import "./shared/styles/globals.css";
import "./shared/styles/animations.css";
import App from "./app/App";
import AppProvider from "./app/provider";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);