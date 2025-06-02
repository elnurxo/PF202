import { createBrowserRouter, RouterProvider } from "react-router";
import ROUTES from "./routes/index.jsx";
import { SnackbarProvider } from "notistack";

const router = createBrowserRouter(ROUTES);

const App = () => {
  return (
    <>
      <SnackbarProvider>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </>
  );
};

export default App;
