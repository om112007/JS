//map
console.log('map')
const games = ["Cricket", "Hockey", "Football", "Volleyball", "Tennis", "Golf"]

games.map((item) => {
    console.log(item);
})

console.log("\n")

console.log(games.map((name) => {
    return name
}));


games.map((items, key) => {
    console.log(items, key);
})
console.log("\n")
const age = [25, 30, 26, 34, 55, 45, 81, 12, 18]

//Filter
console.log('Filter')
const filter = age.filter((abc) => abc < 30)
console.log(filter)

console.log("\n")

age.filter((abc) => abc < 30).map((a) => {
    console.log(a);
})

console.log("\n")

//reduce
console.log('Reduce')
let arr3 = [1, 2, 3, 5, 2, 1]
let newarr3 = arr3.reduce((h1, h2) => {
    return h1 + h2
})

console.log(newarr3);

console.log("\n")

//Arrow function
console.log('Arrow function')
const add = (a, b) => console.log(a + b);
const subtract = (a, b) => a - b
const showNumber = a => console.log(a);

add(1, 2)
console.log(subtract(10, 5))
showNumber(50)

console.log('\n')

//Spread operator
console.log('Spread operator')
const numbers = [1, 2, 3];
const morenumbers = [1, 2, 3];

const arraycombined = [...numbers, ...morenumbers];
console.log(arraycombined);

const person = { name: 'Alice', age: 30 };
const address = { city: 'New york', country: 'USA' };

console.log(objectcombined = { ...person, ...address })

console.log('\n')

//if else statement 
console.log('if else statement ')
const age1 = 20

if(age1 >=18){
    console.log("Adult");
}else
{
    console.log("Not Adult");
}


console.log('\n')
//Ternary operator
console.log('Ternary operator')

const isAdult = age1 >= 18 ? 'Adult' : 'Not Adult'

console.log(isAdult);

// function in js 
function Sub(a,b){
    console.log(a - b);
}

Sub( 10,20) ;



