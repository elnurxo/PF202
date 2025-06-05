import React, { useState } from "react";

const Rent = () => {
  const [formData, setFormData] = useState({
    carMake: "",
    carModel: "",
    carYear: "",
    rentStart: "",
    rentEnd: "",
    renterName: "",
    renterEmail: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rent data submitted:", formData);
    // You can send data to backend here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Rent a Car</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Car Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Car Information
            </h3>
            <input
              type="text"
              name="carMake"
              placeholder="Car Make (e.g., Toyota)"
              value={formData.carMake}
              onChange={handleChange}
              className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="carModel"
              placeholder="Car Model (e.g., Corolla)"
              value={formData.carModel}
              onChange={handleChange}
              className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="number"
              name="carYear"
              placeholder="Year (e.g., 2021)"
              value={formData.carYear}
              onChange={handleChange}
              className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Rent Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Rent Information
            </h3>
            <input
              type="text"
              name="renterName"
              placeholder="Renter's Name"
              value={formData.renterName}
              onChange={handleChange}
              className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="renterEmail"
              placeholder="Renter's Email"
              value={formData.renterEmail}
              onChange={handleChange}
              className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <div className="flex gap-4 mb-4">
              <input
                type="date"
                name="rentStart"
                value={formData.rentStart}
                onChange={handleChange}
                className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="date"
                name="rentEnd"
                value={formData.rentEnd}
                onChange={handleChange}
                className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Rental
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Rent;
