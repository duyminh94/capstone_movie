import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Modules/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [      
      { index: true, element: <Navigate to="/trangchu" /> },
      { path: "/trangchu", element: <Home/> }
    ],
  },
]);

export default router;
