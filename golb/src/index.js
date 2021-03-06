import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StyleReset } from "atomize";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const root = ReactDOM.createRoot(document.getElementById("root"));
// 1. Create a client engine instance
const engine = new Styletron();

// 2. Provide the engine to the app
// debug engine needs inlined source maps
root.render(
  <React.StrictMode>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <StyleReset></StyleReset>
      <App />
    </StyletronProvider>
  </React.StrictMode>
);
