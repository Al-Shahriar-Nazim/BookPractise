import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/BookDetais/BookDetails";
import Readlist from "../Pages/Readlist/Readlist";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("booksData.json"),
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "/readlist",
        loader: () => fetch("booksData.json"),
        Component: Readlist,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
