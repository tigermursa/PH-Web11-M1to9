import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        children: [
          {
            path: "/",
            Component: App,
          },
        ],
      },
    ],
  },
]);

export default router;
