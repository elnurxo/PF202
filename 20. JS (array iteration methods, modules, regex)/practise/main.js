import { products, students, numbers } from "./data.js";

// products
// category Electronics filter
function filterByCategory(arr, category) {
  return arr.filter((item) => {
    return item.category == category;
  });
}
// console.log(filterByCategory(products, 'Electronics'));

// endirimde olan ilk mehsulu tapin
function findFirstDiscountedProduct(arr) {
  return arr.find((item) => {
    return item.discountPercentage > 0;
  });
}

// console.log(findFirstDiscountedProduct(products));

// umumi mehsullarin gelirini hesablayin
function getTotalProfit(arr) {
  let profit = arr.reduce((prevValue, currentValue) => {
    let singleProfit =
      currentValue.salePrice -
      (currentValue.salePrice * currentValue.discountPercentage) / 100 -
      currentValue.costPrice;
    return (prevValue += singleProfit);
  }, 0);

  return profit;
}

// console.log(getTotalProfit(products));

// en bahali mehsulu tapin
function findMostExpensiveProduct(arr) {
  const sortedProducts = arr
    .toSorted((prod1, prod2) => {
      return prod1.salePrice - prod2.salePrice;
    })
    .toReversed();

  return sortedProducts[0];
}

// console.log(findMostExpensiveProduct(products));

// mehsullari qiymetine gore artan sira ile siralayin
function sortByPrice(arr) {
  return arr.toSorted((prod1, prod2) => {
    return prod1.salePrice - prod2.salePrice;
  });
}

// console.log(sortByPrice(products))

// expire olmush mehsullari array-den cixarin

