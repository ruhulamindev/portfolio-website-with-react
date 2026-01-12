import { createBrowserRouter } from "react-router-dom"; // note: react-router-dom
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
]);
