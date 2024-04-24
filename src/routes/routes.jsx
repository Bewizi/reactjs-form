import { Login } from "../account/Login";
import { SignUp } from "../account/SignUp";
import { GuestLayout } from "../layout/GuestLayout";
import { Layout } from "../layout/Layout";
import { MainLayout } from "../layout/MainLayout";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Gallery } from "../pages/Gallery";
import { Home } from "../pages/Home";
import { Nonfoundpage } from "../pages/Nonfoundpage";

export const routes = [
  {
    path: "/",
    element: <Layout />,
  },

  {
    path: "/guest",
    element: <GuestLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "",
        element: <About />,
      },
      {
        path: "",
        element: <Gallery />,
      },
      {
        path: "",
        element: <Contact />,
      },
      {
        path: "",
        element: <Nonfoundpage />,
      },
    ],
  },

  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <Nonfoundpage />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
];
