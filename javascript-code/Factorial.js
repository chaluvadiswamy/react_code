const findFactorial = (num) => {
    if (num == 0 || num == 1) {
      return 1;
    } else {
        console.log("number ===", num);
        console.log("=====",num * findFactorial(num - 1));
      return num * findFactorial(num - 1);
    }
  };
  console.log(findFactorial(4));