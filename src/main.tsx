import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import DAPP from "./routes/DAPP";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Portal>
        <Home />
      </Portal>
    ),
  },
  {
    path: "/dapp",
    element: (
      <Portal>
        <DAPP />
      </Portal>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement,
} from "chart.js";
import Portal from "./components/portal/Portal";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement
);
