
const carData = [
  {
    id: 1,
    name: "Toyota Corolla",
    type: "Sedan",
    price: 40,
    image:
      "https://scene7.toyota.eu/is/image/toyotaeurope/cors0005a_web_2023:Medium-Landscape?ts=1708962012070&resMode=sharp2&op_usm=1.75,0.3,2,0",
  },
  {
    id: 2,
    name: "Tesla Model 3",
    type: "Electric",
    price: 75,
    image:
      "https://scene7.toyota.eu/is/image/toyotaeurope/cors0005a_web_2023:Medium-Landscape?ts=1708962012070&resMode=sharp2&op_usm=1.75,0.3,2,0",
  },
];

const Favorites = () => {
  const cars = [...carData];
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Favorite Cars
        </h3>

        {/* Car Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.length ? (
            cars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-lg">{car.name}</h4>
                  <p className="text-sm text-gray-600">
                    {car.type} – From ${car.price}/day
                  </p>
                  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
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
  );
};

export default Favorites;
