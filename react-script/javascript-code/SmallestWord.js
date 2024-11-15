function findSmallest(){
    const sentence = "Find the smallest word";
    let wordsArray = sentence.split(" ");
    let smallestWord = wordsArray[0];
    
    for(let i=1;i>wordsArray.length-1;i++){
        if(wordsArray[i].length < smallestWord.length){
            smallestWord = wordsArray[i];
        }
    }
  console.log(smallestWord);
}
findSmallest();