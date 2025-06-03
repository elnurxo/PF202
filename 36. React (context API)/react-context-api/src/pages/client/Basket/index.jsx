import { useContext } from "react";
import BasketContext from "../../../context/BasketContext/basketContext";

const Basket = () => {
  const {
    basket,
    addToBasket,
    clearBasket,
    removeFromBasket,
    decreaseQuantity,
  } = useContext(BasketContext);
  return (
    <>
      <table className="w-[90%] mx-auto my-14 bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
              Cover
            </th>
            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
              Title
            </th>
            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
              Author
            </th>
            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
              Price
            </th>
            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
              Quantity
            </th>
            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
              Total
            </th>
            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
              Increase
            </th>
            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
              Decrease
            </th>
            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
              Remove
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Sample row - map over basket to create more */}
          {basket &&
            basket.map((item) => {
              return (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-16 h-24 object-cover rounded"
                    />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {item.title}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{item.author}</td>
                  <td className="px-6 py-4 text-gray-700">${item.price}</td>
                  <td className="px-6 py-4 text-gray-700">{item.quantity}</td>
                  <td className="px-6 py-4 text-gray-800 font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-gray-800 font-semibold">
                    <button onClick={()=>{
                      addToBasket(item);
                    }} className="bg-emerald-200 rounded px-4 py-2 font-bold">
                      +
                    </button>
                  </td>
                  <td className="px-6 py-4 text-gray-800 font-semibold">
                    <button onClick={()=>{
                      decreaseQuantity(item);
                    }} className="bg-emerald-200 rounded px-4 py-2 font-bold">
                      -
                    </button>
                  </td>
                  <td className="px-6 py-4 text-gray-800 font-semibold">
                    <button
                      onClick={() => {
                        removeFromBasket(item);
                      }}
                      className="bg-red-200 rounded px-4 py-2 font-bold"
                    >
                      remove
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <button
        onClick={() => {
          clearBasket();
        }}
        className="flex rounded ml-18 text-white font-bold cursor-pointer bg-red-500 px-4 py-2"
      >
        clear all basket
      </button>
    </>
  );
};

export default Basket;
