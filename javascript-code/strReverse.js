function strReverse(strValue){
    let result = "";
    for(let i = strValue.length - 1; i >= 0 ;i--){
        result += strValue[i];
    }
    console.log(result);
}

function reverseSentence(sentence){
    const wordsArray = sentence.split(" ");
    let result1 = " ";
    let result = [];
    
    for(let i= wordsArray.length-1 ;i >= 0 ; i--){
        result1 += wordsArray[i] + " ";
        result.push(wordsArray[i]);
    }
    console.log("Sentence Reverse =>",result1);
    console.log(result.join(" "));
}

strReverse('Hello I am Ui Developer');
reverseSentence('Hello I am Ui Developer');