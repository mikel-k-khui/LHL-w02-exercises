const multiplicationTable = function(maxValue) {
  let result = '';
  for (let outter = 1; outter <= maxValue; outter++) {
    for (let inner = 1; inner <= maxValue; inner++) {
      result = result.concat(outter * inner, ' ');
    }
    result = result.concat('\n');
  }
  return result;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));