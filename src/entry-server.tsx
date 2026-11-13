import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

/** Renders the page to HTML at build time so content shows before JavaScript runs. */
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
