import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@dnb/eufemia/style/basis";
import "@dnb/eufemia/style/components";
import "@dnb/eufemia/style/themes/ui";
import axios from "axios";
import { worker } from "./mocks/handler";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const env = import.meta.env.MODE;
if (env === "development") {
  await worker.start({
    onUnhandledRequest: ({ method, url }) => {
      if (!url.pathname.match(/\.(tsx|ts|css|woff|woff2|ttf)/)) {
        throw new Error(`Unhandled ${method} request to ${url}`);
      }
    },
  });
}

axios.defaults.baseURL = "http://localhost:5001";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
