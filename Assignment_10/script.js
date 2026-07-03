console.log("External JavaScript is connected successfully.");



let name = "Aman";
let age = 22;
let isStudent = true;
let address;
let salary = null;
let bigNumber = 12345678901234567890n;
let uniqueId = Symbol("id");

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Undefined:", address);
console.log("Null:", salary);
console.log("BigInt:", bigNumber);
console.log("Symbol:", uniqueId);




let studentName = "Ankush";
let studentAge = 20;
let course = "Full Stack Development";
let city = "Patna";

console.log("Student Name:", studentName);
console.log("Age:", studentAge);
console.log("Course:", course);
console.log("City:", city);



let employee = {
    name: "Rahul",
    department: "IT",
    salary: 50000,
    experience: 3
};

console.log(employee);
console.log(employee.name);
console.log(employee.salary);

employee.salary = 60000;

console.log(employee);



let mobile = {
    brand: "Samsung",
    model: "Galaxy S24",
    price: 70000,
    color: "Black"
};

console.log(mobile);

mobile.price = 68000;

console.log(mobile);




let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log("First Fruit:", fruits[0]);

console.log("Last Fruit:", fruits[fruits.length - 1]);

fruits.push("Pineapple");
fruits.push("Kiwi");

console.log("Length:", fruits.length);

console.log(fruits);



let subjects = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "NodeJS"
];

console.log(subjects[0]);

console.log(subjects[2]);

subjects.push("MongoDB");

console.log(subjects.length);

console.log(subjects);



let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);




let basicSalary = 25000;
let bonus = 5000;

let totalSalary = basicSalary + bonus;

console.log("Total Salary:", totalSalary);



let marks = 50;

marks += 10;
console.log(marks);

marks -= 5;
console.log(marks);

marks *= 2;
console.log(marks);

marks /= 5;
console.log(marks);

marks %= 7;
console.log(marks);



let x = 10;
let y = 20;

console.log(x > y);
console.log(x < y);
console.log(x == y);
console.log(x != y);
console.log(x === y);
console.log(x !== y);




let age1 = 22;

console.log(age1 > 18 && age1 < 30);

console.log(age1 > 25 || age1 < 30);

console.log(!(age1 > 18));




let count = 10;

count++;
console.log(count);

count++;
console.log(count);

count--;
console.log(count);



let product = {
    productName: "Laptop",
    price: 55000,
    category: "Electronics",
    rating: 4.8
};

console.log(product);

product.price = 50000;

console.log(product);




let cities = [
    "Delhi",
    "Mumbai",
    "Patna",
    "Kolkata",
    "Lucknow",
    "Jaipur",
    "Chennai",
    "Pune",
    "Hyderabad",
    "Bangalore"
];

console.log(cities[0]);

console.log(cities[cities.length - 1]);

cities.push("Noida");

console.log(cities.length);

console.log(cities);



let myName = "Ankush";
let myAge = 20;

let myProfile = {
    name: myName,
    age: myAge,
    course: "Full Stack Development",
    city: "Patna"
};

let hobbies = [
    "Coding",
    "Reading",
    "Cricket"
];

console.log(myName);
console.log(myAge);
console.log(myProfile);
console.log(hobbies);



let dashboardName = "Ankush";
let dashboardAge = 20;
let dashboardCourse = "Full Stack Development";

let studentProfile = {
    name: dashboardName,
    age: dashboardAge,
    course: dashboardCourse,
    city: "Patna",
    college: "GLA University"
};

let skills = [
    "HTML",
    "CSS",
    "JavaScript"
];

console.log("Student Dashboard");

console.log(studentProfile);

console.log(skills);

skills.push("React");

skills.push("NodeJS");

console.log("Updated Skills:");

console.log(skills);