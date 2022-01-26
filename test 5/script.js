function getRand() {
  let usedNumbers = [];
  function f() {
    if (usedNumbers.length === 100) {
      return;
    }
    let num = Math.floor(Math.random() * 100) + 1;
    for (let i = 0; i < usedNumbers.length; i++) {
      if (num === usedNumbers[i]) return f();
    }
    usedNumbers.push(num);
    return num;
  }
  return f;
}

let func = getRand();
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
