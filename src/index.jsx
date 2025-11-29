import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // This line imports the component you created

// Get the root element from public/index.html
const rootElement = document.getElementById("root");

// Create the React 18 root and render the App component
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
