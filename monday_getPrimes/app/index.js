'use strict';

let getPrimes = (number) => {
  let primes = [];

  if (number <= 0)
    return primes;

	for (let i = 2; i <= number; i++) {
    if (isPrime(i))
      primes.push(i);
  }
	
  return primes;
}

const isPrime = (number) => {
  for (let k = 2; k <= Math.sqrt(number); k++) {
    if (number % k == 0) 
      return false;
  }
  return true;
}

module.exports = getPrimes