const checkPallindrome = (str) => {
    const len = str.length;
    for (let i = 0; i < len/2; i++) {
      if (str[i] !== str[len - i - 1]) {
        return "Not pallindrome";
      }
  }
    return "pallindrome";
  };
  console.log(checkPallindrome("MadaM"));