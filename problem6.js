//problem1,
function mapExample(input) {
    const numbers = input.split(' ').map(Number); 
    const doubledNumbers = numbers.map(num => num * 2);
    console.log(doubledNumbers);

}
const input = "1 2 3 4";
mapExample(input);

//problem2.
function filterExample(input) {
    const numbers = input.split(',').map(Number);
    const evenNumbers = numbers.filter(num => num % 2 === 0); 
    console.log(evenNumbers);
}

const input = "1, 2, 3, 4, 5";
filterExample(input);

//problem3.
function reduceExample(input) {
    const numbers = input.split(';').map(Number); 
    const sum = numbers.reduce((acc, num) => acc + num, 0); 
    console.log(sum); 
}

const input = "5; 10; 15"; 
reduceExample(input);

