let arr = [
    1, 2, 3, 4
];

let result = arr.map(v => ({key: v, number: v + 1}));
console.log(result);

/*
output=>[
  { key: 1, number: 2 },
  { key: 2, number: 3 },
  { key: 3, number: 4 },
  { key: 4, number: 5 }
]
 */
