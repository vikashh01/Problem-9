const students = [
    { name: "Alice", age: 21 },
    { name: "Bob", age: 19 },
    { name: "Charlie", age: 23 },
    { name: "David", age: 20 }
];

function sortByAge(a, b) {
    return b.age - a.age;
}

function sortStudents(students, conditionFunction) {
    return students.sort(conditionFunction);
}

const sortedStudents = sortStudents(students, sortByAge);
console.log(sortedStudents);
