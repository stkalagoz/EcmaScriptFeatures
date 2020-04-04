let arr = [
    {id: 1, name: "iker", surname: "casillas"},
    {id: 2, name: "ricardo", surname: "carvalho"},
    {id: 3, name: "kepler lima", surname: "pepe"},
    {id: 4, name: "sergio", surname: "ramos"},
    {id: 5, name: "emre", surname: "belezoğlu"},
    {id: 6, name: "xavi", surname: "alagoz"},
    {id: 7, name: "cristiano", surname: "ronaldo"},
    {id: 8, name: "steven", surname: "gerrard"},
    {id: 9, name: "fernando", surname: "torres"},
    {id: 10, name: "alex", surname: "de souza"}
];

let newArr = arr.reduce((prev, cur)=>{
    prev.push(cur.id);
    return prev
},[]);

console.log(newArr);

