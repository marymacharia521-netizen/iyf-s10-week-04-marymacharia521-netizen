// CALCULATOR

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
        case "%": return modulus(num1, num2);
        case "**": return power(num1, num2);
        default: return "Invalid operator";
    }
}

// TEST CALCULATOR
console.log(calculate(10, "+", 5));
console.log(calculate(10, "/", 0));


// GRADE TRACKER

const gradeTracker = {
    students: [],

    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    getStudentAverage(name) {
        const student = this.students.find(s => s.name === name);
        const scores = Object.values(student.grades);
        return (scores.reduce((a,b)=>a+b,0)/scores.length).toFixed(2);
    }
};

// TEST
gradeTracker.addStudent("Mary", { math: 80, english: 70 });
console.log(gradeTracker.getStudentAverage("Mary"));


// FIZZBUZZ

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}
