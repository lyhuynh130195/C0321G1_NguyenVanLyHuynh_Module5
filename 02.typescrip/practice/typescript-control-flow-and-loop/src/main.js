
var isPrime = function (num) {
    if (num === 2) {
        return true;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
var sum = 0;
var sumPrime = function (count) {
    var i = 2;
    var n = 0;
    while (n <= count) {
        if (isPrime(count)) {
            sum += i;
            n++;
        }
        i++;
    }
    return sum;
};
console.log(sumPrime(30));
