function primeArray(arrayLeng) {
  nextPrime: for (let i = 2; i <= arrayLeng; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    console.log(i);
  }
  return arrayLeng;
}

console.log(primeArray(11));
