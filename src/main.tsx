import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import { enableTracking } from "./services/tracking";
import "./style.css";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const basename: string = import.meta.env.VITE_PATH_BASENAME ?? "";

enableTracking();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router basename={basename}>
      <App />
    </Router>
  </React.StrictMode>,
);
