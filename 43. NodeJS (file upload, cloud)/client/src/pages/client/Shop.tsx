import { useState, useEffect } from "react";
import controller from "../../services/requests/commonRequest";
import { endpoints } from "../../services/api";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    controller.getAll(endpoints.products).then((resp) => {
      setProducts([...resp.data]);
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
        Bazaar Products
      </h2>

      {/* Filter, Search, Sort Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="border border-gray-300 rounded-md px-3 py-2 w-full md:w-1/3 text-gray-700 placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          value={""}
          onChange={(e) => {}}
        />

        <select
          className="border border-gray-300 rounded-md px-3 py-2 w-full md:w-1/4 text-gray-700
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          value={""}
          onChange={(e) => {}}
        >
          {/* {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))} */}
        </select>

        <select
          className="border border-gray-300 rounded-md px-3 py-2 w-full md:w-1/4 text-gray-700
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          // value={sortBy}
          onChange={(e) => {
            // setSortBy(e.target.value);
            // setCurrentPage(1);
          }}
        >
          {/* {sortOptions.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))} */}
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {products.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        ) : (
          products.map((product) => {
            return (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md overflow-hidden transition-shadow"
              >
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-md font-medium text-gray-900 truncate">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    ${product.costPrice.toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {product.category.name}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-8 space-x-2">
        <button
        // disabled={currentPage === 1}
        // onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
        // className={`px-3 py-1 rounded-md border transition ${
        //   currentPage === 1
        //     ? "text-gray-300 border-gray-200 cursor-not-allowed"
        //     : "border-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white"
        // }`}
        >
          Prev
        </button>

        {/* {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded-md border transition ${
              page === currentPage
                ? "bg-blue-600 text-white border-blue-600"
                : "border-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {page}
          </button>
        ))} */}

        <button
        // disabled={currentPage === totalPages}
        // onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
        // className={`px-3 py-1 rounded-md border transition ${
        //   currentPage === totalPages
        //     ? "text-gray-300 border-gray-200 cursor-not-allowed"
        //     : "border-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white"
        // }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Shop;
