const findLongestWord = (sentence) => {
    let wordsArray = sentence.split(" ");
    let longestWord = "";
    for (let i = 0; i < wordsArray.length; i++) {
      if (wordsArray[i].length > longestWord.length) {
        longestWord = wordsArray[i];
      }
  }
    console.log(longestWord);
  };
  findLongestWord("Hi I am Swamy I am a UI Developer");