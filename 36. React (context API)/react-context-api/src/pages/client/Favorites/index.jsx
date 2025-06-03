import { useContext } from "react";
import FavoriteContext from "../../../context/FavoritesContext/favoriteContext";
import { enqueueSnackbar } from "notistack";
import { Heart } from "lucide-react";

const Favorites = () => {
  const { favorites, toggleFavorite } = useContext(FavoriteContext);

  return (
    <>
      <>
        <h1 className="text-center text-3xl font-semibold my-6">
          Favorite Books
        </h1>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto mb-8">
          {favorites.map((book) => {
            return (
              <div
                key={book.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-60 object-cover"
                  />
                  <Heart
                    onClick={() => {
                      toggleFavorite(book);
                      enqueueSnackbar(`${book.title} removed from favorites`, {
                        variant: "success",
                        autoHideDuration: 2000,
                        anchorOrigin: {
                          vertical: "bottom",
                          horizontal: "right",
                        },
                      });
                    }}
                    style={{ width: "36px", height: "36px" }}
                    fill={"#ff0000"}
                    color="#ff0000"
                    className="absolute right-6 top-4 cursor-pointer hover:scale-95 transition"
                  />
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">{book.title}</h3>
                  <p className="text-sm text-gray-600">by {book.author}</p>
                  <p className="text-sm text-gray-500 italic">
                    {book.genre} · {book.year}
                  </p>
                  <div className="mt-2 font-bold text-blue-600">
                    ${book.price}
                  </div>
                  <div className="flex items-center gap-x-2.5 justify-center">
                    <button className="underline cursor-pointer">
                      details
                    </button>
                    <button className="underline text-red-500 cursor-pointer">
                      delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    </>
  );
};

export default Favorites;
