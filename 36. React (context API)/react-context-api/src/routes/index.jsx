import Home from "../pages/client/Home";
import About from "../pages/client/About";
import Books from "../pages/client/Books";
import BookDetail from "../pages/client/BookDetail";
import Basket from "../pages/client/Basket";
import NotFound from "../pages/client/NotFound";
import ClientLayout from "../layout/client/ClientLayout";
import Favorites from "../pages/client/Favorites";
import Login from "../pages/client/Login";
import ProtectedRoute from "../components/common/ProtectedRoute";

const ROUTES = [
  {
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "books/:id",
        element: <BookDetail />,
      },

      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "favorites",
            element: <Favorites />,
          },
          {
            path: "basket",
            element: <Basket />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default ROUTES;
