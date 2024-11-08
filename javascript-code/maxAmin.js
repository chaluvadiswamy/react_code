function Findmaxmin(numbers){
    let numlength = numbers.length;
    let minNumber = numbers[0];
    let maxNumber = numbers[0];
    for(let i=1;i<numlength;i++){
        if(numbers[i] > maxNumber){
          maxNumber = numbers[i]  
        }
        if(numbers[i] < minNumber){
            minNumber = numbers[i];
        }
    }
    console.log("Max Number => ",maxNumber);
    console.log('Min Number =>', minNumber);

}
//alternative using javascript Math
function MinMaxNum(numbers){
    let maxNumber = Math.max(...numbers);
    let minNumber = Math.min(...numbers);
    console.log("Alter Max Number => ",maxNumber);
    console.log('Alter Min Number =>', minNumber);
}

const num = [67,45,23,78,12,5,11];
Findmaxmin(num);
MinMaxNum(num);