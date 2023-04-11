import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CustomerPage from "./pages/Customer";
import HomePage from "./pages/Home/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "CustomerPage", element: <CustomerPage /> },
    ],
  },
]);

export default router;
