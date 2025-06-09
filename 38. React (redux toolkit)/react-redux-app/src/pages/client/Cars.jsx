import { useEffect, useState } from "react";
import controller from "../../services/requests/request";
import { endpoints } from "../../constants";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack";

const Cars = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [cars, setCars] = useState([]);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    controller.getAll(endpoints.cars).then((data) => {
      setCars([...data]);
    });
  }, []);

  const filteredCars = cars.filter((car) => {
    const matchesSearch =
      car.brand.toLowerCase().includes(search.toLowerCase()) ||
      car.model.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || car.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8 text-blue-600">
            Our Cars
          </h3>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-10">
            <input
              type="text"
              placeholder="Search by name..."
              className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Types</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Electric">Electric</option>
            </select>
          </div>

          {/* Car Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCars.length ? (
              filteredCars.map((car) => (
                <div
                  key={car.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <img
                    src={car.imageUrl}
                    alt={car.brand}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-lg underline">
                      <Link to={`/cars/${car.id}`}>
                        <span className="font-bold">{car.brand}</span>{" "}
                        {car.model}
                      </Link>
                    </h4>
                    <p className="text-sm text-gray-600">
                      {car.type} – From ${car.pricePerDay}/day
                    </p>
                    <button
                      onClick={() => {
                        if (user && user.role === "client") {
                          navigate(`/rent-a-car/${car.id}`);
                        } else {
                          enqueueSnackbar("you should be logged in to rent", {
                            variant: "error",
                            autoHideDuration: 2000,
                            anchorOrigin: {
                              vertical: "bottom",
                              horizontal: "right",
                            },
                          });
                        }
                      }}
                      className="cursor-pointer mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Rent Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                No cars found.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cars;
