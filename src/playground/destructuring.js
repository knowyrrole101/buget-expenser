console.log('testing destructuring')

const person = {
    name:'Moon',
    age: 35,
    location: {
        city: 'Austin',
        temp: 95
    }
};
console.log(`${person.name} is located in ${person.location.city}. The temperature there is currently ${person.location.temp}`);

// Object Destructuring 
const {name, age} = person;
// Exact match variables
// const {city, temp} = person.location
// Renaming syntax
const {city, temp: temperature} = person.location;
// If no variable exists in object set default
const { occupation = 'None'} = person;
const { occupation: occupation2 = 'Nothing'} = person;

console.log(`${name} is located in ${city}. He is ${age} years old. The temperature there is currently ${temperature}. His occupation is ${occupation}`);

const book = {
    title : 'Ego is the enemy',
    author: 'Ryan Holliday',
    publisher: {
        name: 'Penguin'
    }
};
// If NAME DOES EXIST SET A DEFAULT
const { name: publisherName='Default' } = book.publisher

console.log(publisherName);

// Array Destructuring

const address = ['1299 South Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// Grab all array values
let [street, cityb, state, zip] = address; 
// Grab some
// let [street, cityb, state] = address; 
// Grab some and set a default value
// let [, , state='Texas'] = address;

console.log(`You are in: ${cityb},${state}`);

const coffeeShop = ['Coffee(hot)', '$2.00', '$2.50' , '$3.00'];
let [item_name, small='$1.00', large, x_large] = coffeeShop

console.log(`We have ${item_name} prices at: ${small}, ${large} ${x_large}`);