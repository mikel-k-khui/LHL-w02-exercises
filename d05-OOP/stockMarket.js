const prices = [45, 20, 35, 31, 10, 38, 11, 40];

const findProfit = function(pArray, starts) {
  let profit = largestAfter(pArray, 1);
  let holder = 0;

  if (pArray.length === 2) {
    // console.log(`@End on ${starts} profit: ${profit.largest}:${profit.start}-${profit.end} and ${holder.largest}:${holder.start}-${holder.end}`);

    return profit;
  }

  holder = findProfit(pArray.slice(1), ++starts);

  if (holder.largest > profit.largest) {
    profit.largest = holder.largest;
    profit.start = holder.start;
    profit.end = holder.end;
    profit.added = holder.added;

    if (holder.added !== "yes") {
      // console.log(`@${starts} profit: ${profit.largest}:${profit.start}-${profit.end} ${profit.added} and ${holder.largest}:${holder.start}-${holder.end} ${holder.added}`);

      profit.start = holder.start + starts;
      profit.end = holder.end + starts;
      profit.added = "yes";
      // flag and track of the position in the array through the recursion
    }
  }
  // console.log("Returning:", profit);
  return profit;
};

const largestAfter = function(pricesArray, end) {
  let profit = {};
  profit.largest = pricesArray[end] - pricesArray[0];
  profit.start = 0;
  profit.end = end;
  profit.added = 0;

  let check = 0;

  if ((pricesArray.length - 1) === end) {
    return profit;
  }

  check = largestAfter(pricesArray, ++end);

  // console.log(`${pricesArray} in loop ${end}: ${profit.largest} ${check.start}-${check.end}`);

  if (profit.largest < check.largest) {
    profit.largest = check.largest;
    profit.end = check.end;
  }
  return profit;
};

const result = findProfit(prices, 1);
// console.log(result);
console.log(`Most profit is ${result.largest} by investing in period ${result.start} and sell in period ${result.end}`);