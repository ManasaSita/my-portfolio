import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
