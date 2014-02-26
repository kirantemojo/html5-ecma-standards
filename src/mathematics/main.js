// Prime Number Mathematics
// Checking Whether a number is Prime or Not
define([],function () {
	//Different Methods
	//Basic Methodolgy of Prime Check
	return {'isPrime':function(num){
		if(num < 2) return false;
		for(var i = 2; i < num ; i++)
		{
			if(num%i == 0) return false;
		}
		return true;
	// Basic Method of listing Prime Numbers	
	},'listPrimes':function(length){
		var primes = [];
		for (var i = 0; i < length; i++) {
			if(this.isPrime(i))	primes.push(i);
		};
		return primes;
	//Sieve of Erastosthenes Implementation of Primes
	},'sievePrimeList':function(max){
		var sieve = [], i, j, primes = [];
	    for (i = 2; i <= max; ++i) {
	        if (!sieve[i]) {
	            // i has not been flagged -- it is prime
	            primes.push(i);
	            for (j = i << 1; j <= max; j += i) {
	                sieve[j] = true;
	            }
	        }
	    }
	    return primes;
	}};
});