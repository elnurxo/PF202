import { useState, useEffect, useCallback } from "react";
import controller from "../../services/requests/commonRequest";
import { endpoints } from "../../services/api";
import type { Product } from "../../types/product";
import type { Category } from "../../types/category";

const sortOptions = [
  { label: "Newest", value: "createdAt-desc" },
  { label: "Price: Low to High", value: "salePrice-asc" },
  { label: "Price: High to Low", value: "salePrice-desc" },
];

interface ProductsResponse {
  message: string;
  totalProducts: number;
  page: number;
  data: Product[];
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(""); // For debouncing
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [totalProducts, setTotalProducts] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const totalPages = Math.ceil(totalProducts / limit);

  // Debounce search input by 500ms
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
      setCurrentPage(1); // Reset page on new search
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    const queryParams = `?page=${currentPage}&limit=${limit}&search=${debouncedSearch}&category=${selectedCategory}&sortBy=${sortBy}&sortOrder=${sortOrder}`;

    try {
      const response: ProductsResponse =
        await controller.getAll<ProductsResponse>(
          `${endpoints.products}${queryParams}`
        );

      setProducts(response.data ?? []);
      setTotalProducts(response.totalProducts ?? 0);
      setCurrentPage(response.page ?? currentPage);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setProducts([]);
      setTotalProducts(0);
    } finally {
      setIsLoading(false);
    }
  }, [
    currentPage,
    limit,
    debouncedSearch,
    selectedCategory,
    sortBy,
    sortOrder,
  ]);

  const fetchCategories = async () => {
    try {
      const response = await controller.getAll<Category[]>(
        endpoints.categories
      );
      setCategories(response.data ?? []);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      setCategories([]);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Re-fetch products when dependencies change, including debounced search
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
        Bazaar Products
      </h2>

      {/* Filter, Search, Sort */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="border border-gray-300 rounded-md px-3 py-2 w-full md:w-1/3 text-gray-700 placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          className="border border-gray-300 rounded-md px-3 py-2 w-full md:w-1/4 text-gray-700
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="">All Categories</option>
          {categories.length > 0 ? (
            categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))
          ) : (
            <option disabled>Loading categories...</option>
          )}
        </select>

        <select
          className="border border-gray-300 rounded-md px-3 py-2 w-full md:w-1/4 text-gray-700
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          value={`${sortBy}-${sortOrder}`}
          onChange={(e) => {
            const [field, order] = e.target.value.split("-");
            setSortBy(field);
            setSortOrder(order);
            setCurrentPage(1);
          }}
        >
          {sortOptions.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      {isLoading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {products.map((product) => (
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
                  ${product.salePrice.toFixed(2)}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {product.category?.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination + Show Per Page */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-8 gap-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="limit" className="text-sm text-gray-600 font-medium">
            Show per page:
          </label>
          <select
            id="limit"
            value={limit}
            onChange={(e) => {
              setLimit(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border border-gray-300 rounded-md px-3 py-1 text-gray-700
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          >
            {[3, 6, 9, 12].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-2 justify-center">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md border transition ${
              currentPage === 1
                ? "text-gray-300 border-gray-200 cursor-not-allowed"
                : "border-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white"
            }`}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(
            (page) => (
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
            )
          )}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md border transition ${
              currentPage === totalPages
                ? "text-gray-300 border-gray-200 cursor-not-allowed"
                : "border-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
