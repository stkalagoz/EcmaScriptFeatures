function f(x, y, ...a) {
    console.log(x);
    console.log(y);
    console.log(...a);
    return (x + y) * a.length
}

let f1 = f(1, 2, "hello", true, 7);
console.log(f1);
/*
   output =>  1
              2
              hello true 7
              9
*/
