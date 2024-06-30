import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< Updated upstream
import App from "./App";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
=======
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
>>>>>>> Stashed changes
