import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../RoutigPage/Home";
import WebDevelopment from "../RoutigPage/WebDevelopment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "webDev",
        element: <WebDevelopment />,
      },
    ],
  },
]);
export default router;
