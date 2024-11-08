function isPrime(number) {
    if (number <= 1) {
        return false; // 1 and numbers less than 1 are not
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // If divisible by any number, n
        }
    }
    return true; // If not divisible by any number, it's p
}

console.log(isPrime(17));
console.log(isPrime(9));