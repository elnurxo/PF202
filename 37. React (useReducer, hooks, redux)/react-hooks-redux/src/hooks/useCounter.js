import { useState } from "react";

// Custom hook for counter functionality
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue); // State to keep track of count

  // Function to increment count
  const increment = () => setCount((prevState) => prevState + 1);
  const decrement = () => setCount((prevState) => prevState - 1);

  // Returns count and increment function
  return [count, increment, decrement];
}

export default useCounter;
