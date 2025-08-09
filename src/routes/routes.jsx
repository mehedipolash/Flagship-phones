import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Favourites from "../pages/Favourites";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout, //some people calls it Roots
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        Component: Home,
        hydrateFallbackElement:<p>Please wait...</p>,
        loader:()=> fetch('phones.json')
      },
      {
        path: '/favourites',
        Component: Favourites,
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'phone-details',
        Component: PhoneDetails,
      },
      // {
      //   path: '*',
      //   Component: ErrorPage,   
      // },
    ],
  },
]);
