let evens = [
   1,2,3,4
];

let pairs = evens.map(v => ({even: v, odd: v + 1}));
console.log(pairs);

