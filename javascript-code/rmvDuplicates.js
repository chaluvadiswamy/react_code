
function rmvDuplicates(arrNumbers){
    let arrLen =  arrNumbers.length;
    let uniqArr = [];
    for(let i= 0;i < arrLen; i++ ){
        if(uniqArr.indexOf(arrNumbers[i]) == -1){
            uniqArr.push(arrNumbers[i]);
        }
    }
  console.log(uniqArr);
  //alertnative way
  let newArr = Array.from(new Set(arrNumbers));
  console.log(newArr)
  
}
//alternative inbuilt
 

rmvDuplicates([1, 2, 1, 3, 4, 2, 2, 1, 5, 6]);