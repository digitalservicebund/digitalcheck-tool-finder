import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./style.css";
import { HashRouter as Router } from "react-router-dom";
import { enableTracking } from "./services/tracking";
import { initDb } from "./persistance/initDb";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const basename: string = import.meta.env.VITE_PATH_BASENAME ?? "";

initDb().then(() => {
  enableTracking();

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Router basename={basename}>
        <App />
      </Router>
    </React.StrictMode>,
  );
});
