function FindEven(arr){
  const result = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i]%2 === 0){
        result.push(arr[i]);
    }
  }
  return result;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8,-8,19, 9, 10];
console.log("Even numbers:", FindEven(numbers));