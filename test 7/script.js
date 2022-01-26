function ReturnRepeatedCharTwice(string) {
  let a = new Set(string.split(''));
  let result = [];
  a.forEach((e) => {
    if (string.split(e).length - 1 === 2) {
      result.push(e + e);
    }
  });
  return result;
}

console.log(ReturnRepeatedCharTwice('aaaavvvbbbffeee'));

console.log(ReturnRepeatedCharTwice('aavvvbbbffeee'));
