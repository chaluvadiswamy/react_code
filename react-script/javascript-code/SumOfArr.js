function sumOfarr(array){
    let sum = 0;
    if(array.length < 3){
        return 0;
    }
    for(let i=0; i < array.length; i +=3){
        sum += array[i];
    }
    return sum;

}
console.log(sumOfarr([67, 45, 23, 78, 12, 5, 11])); 
console.log(sumOfarr([1, 2, 3, 4, 5, 6, 7, 8, 9])); 
console.log(sumOfarr([1, 2])); 
console.log(sumOfarr([])); 