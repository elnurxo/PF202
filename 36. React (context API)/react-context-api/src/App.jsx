import { RouterProvider, createBrowserRouter } from "react-router";
import ROUTES from "./routes";
import ModeProvider from "./context/ModeContext/modeProvider";
import FavoriteProvider from "./context/FavoritesContext/favoriteProvider";
import { SnackbarProvider } from "notistack";
import UserProvider from "./context/UserContext/userProvider";
import BasketProvider from "./context/BasketContext/basketProvider";

const router = createBrowserRouter(ROUTES);

const App = () => {
  return (
    <>
      <SnackbarProvider>
        <BasketProvider>
          <UserProvider>
            <FavoriteProvider>
              <ModeProvider>
                <RouterProvider router={router} />
              </ModeProvider>
            </FavoriteProvider>
          </UserProvider>
        </BasketProvider>
      </SnackbarProvider>
    </>
  );
};

export default App;
