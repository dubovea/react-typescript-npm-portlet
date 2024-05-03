import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";

if (window.location.port === "5173") {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App title="React + Typescript portlet sample" />
    </React.StrictMode>
  );
}

export default function (elementId: string) {
  const rootElement = document.getElementById(elementId);

  if (!rootElement) {
    throw new Error("Failed to find the root element");
  }

  const root = createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App title="React + Typescript portlet sample" />
    </React.StrictMode>
  );
}
