function* generator(i) {
    yield i;
    yield i + 10;
    yield i + 20;
    yield "Merhaba";
    yield "Danke";
    return (res)=>res+1;
}

const gen = generator(5);

let output1 = gen.next().value;
console.log(output1);
// expected output1: 5

let output2 = gen.next().value;
console.log(output2);
// expected output2: 15

let output3 = gen.next().value;
console.log(output3);
// expected output3: 25

console.log(gen.next().value);
// expected output: Merhaba

console.log(gen.next().value);
// expected output: Danke

console.log((gen.next().value)(3));
// expected output: 4

