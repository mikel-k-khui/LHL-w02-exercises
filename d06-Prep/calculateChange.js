const denoms = {
  '2000': 'Twenty dollars',
  '1000': 'Ten dollars',
  '500':  'Five dollars',
  '200':  'Two dollars',
  '100':  'One dollar',
  '25':   'Quarter (25¢)',
  '10':   'Dime (10¢)',
  '5':    'Nickel (5¢)',
  '1':    'Penny (1¢)'
};

const divisors = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];


let calculateChange = function(total, cash) {
  let diff = cash - total;
  let result = {};
  
  for (let denom = 0; denom < divisors.length; denom++) {
    // console.log(divisors[denom]);
    // console.log(denoms[divisors[denom]]);

    let quot = quotient(diff, divisors[denom]);

    if (quot > 0) {
      diff -= quot * divisors[denom];
      result[denoms[divisors[denom]]] = quot;
    }
    
    // console.log(`after 'if' ${diff}: ${quot} ${denoms[divisors[denom]]}`);
  }
  return result;
};

const quotient = (num, divisor) => Math.floor(num / divisor);

console.log(calculateChange(1787, 2000));// { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000));// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000));// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }



