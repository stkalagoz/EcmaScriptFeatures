function f(x = 5, y = 7, z = 42) {
    return x + y + z
}

let result1 = f();
console.log(result1);
// output 5 + 7 + 42 = 54
let result2 = f(1);
console.log(result2);
// output 1 + 7 + 42 = 50

