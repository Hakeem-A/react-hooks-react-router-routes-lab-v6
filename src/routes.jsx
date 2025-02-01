import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";  // Changed from Movies to Movie

const ErrorElement = () => <div>Oops! Looks like something went wrong.</div>;

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorElement />
  },
  {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorElement />
  },
  {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorElement />
  },
  {
    path: "/movie/:id",
    element: <Movie />,  // Changed from Movies to Movie
    errorElement: <ErrorElement />
  }
];

export default routes;