function fibSeries(n){
    if (n <= 0) {
        return [];
    }
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    if (n === 1) {
        return [0];
    }

    return sequence;
}
const number = 10;
console.log(fibSeries(number));