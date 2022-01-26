let regexp = /-?\d+(\.\d+)?/g;
let str = 'У Пети было 10 яблок, 2.5 он отдал Маше, 3.5 Васе и 4 оставил себе.';

let matches = str.match(regexp);

console.log(matches);
