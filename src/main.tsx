import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import MaintenanceModeApp from "./MaintenanceModeApp";
import { enableTracking } from "./services/tracking";
import "./style.css";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const basename: string = import.meta.env.VITE_PATH_BASENAME ?? "";
const maintenanceMode: boolean =
  import.meta.env.VITE_MAINTENANCE_MODE == "true";

enableTracking();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router basename={basename}>
      {!maintenanceMode && <App />}
      {maintenanceMode && <MaintenanceModeApp />}
    </Router>
  </React.StrictMode>,
);
