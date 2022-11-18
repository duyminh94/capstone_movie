import { createBrowserRouter } from "react-router-dom";
import Register from "../Modules/Auth/Register";
import Login from "../Modules/Auth/Login";
import AuthLayout from "../Modules/Auth/AuthLayout";
import MainLayout from "../Components/MainLayout";
import Home from "../Modules/Home/Home";
import Movie from "../Modules/Movie/";
import Ticket from "../Modules/Tickets/Ticket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/movie/:movieId", element: <Movie /> },
      { path: "ticket/:ticketId", element: <Ticket /> },
    ],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

export default router;
