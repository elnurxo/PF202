import { useContext, useEffect, useState } from "react";
import { getAll } from "../../../services/requests/book.request";
import { Heart } from "lucide-react";
import FavoriteContext from "../../../context/FavoritesContext/favoriteContext";
import { enqueueSnackbar } from "notistack";
import BasketContext from "../../../context/BasketContext/basketContext";

const Books = () => {
  const [books, setBooks] = useState([]);
  const { favorites, toggleFavorite } = useContext(FavoriteContext);
  const { addToBasket } = useContext(BasketContext);

  useEffect(() => {
    getAll().then((data) => {
      setBooks([...data]);
    });
  }, []);
  return (
    <>
      <h1 className="text-center text-3xl font-semibold my-6">Explore Books</h1>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center max-w-4xl mx-auto px-4 mb-8">
        <input
          type="text"
          placeholder="Search by title..."
          className="w-full sm:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select className="w-full sm:w-1/3 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="">All Genres</option>
          <option value="Programming">Programming</option>
          <option value="Fiction">Fiction</option>
          <option value="Biography">Biography</option>
          {/* Add more genres as needed */}
        </select>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto mb-8">
        {books.map((book) => {
          const isFav = favorites.some((fav) => fav.id == book.id);
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
                    enqueueSnackbar(
                      `${book.title} ${
                        isFav ? "removed from" : "added to"
                      } favorites`,
                      {
                        variant: "success",
                        autoHideDuration: 2000,
                        anchorOrigin: {
                          vertical: "bottom",
                          horizontal: "right",
                        },
                      }
                    );
                  }}
                  style={{ width: "36px", height: "36px" }}
                  fill={isFav ? "#ff0000" : "transparent"}
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
                  <button className="underline cursor-pointer">details</button>
                  <button
                    onClick={() => {
                      addToBasket(book);
                      enqueueSnackbar(`${book.title} added to basket`, {
                        variant: "success",
                        autoHideDuration: 2000,
                        anchorOrigin: {
                          vertical: "bottom",
                          horizontal: "right",
                        },
                      });
                    }}
                    className="underline cursor-pointer"
                  >
                    basket
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
  );
};

export default Books;
