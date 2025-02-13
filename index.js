
let intNum = 10;
let floatNum = 5.5;
let text = "Hello";
let isTrue = true;

console.log(typeof intNum, intNum);
console.log(typeof floatNum, floatNum);
console.log(typeof text, text);
console.log(typeof isTrue, isTrue);

intNum = "20";
floatNum = parseInt(floatNum);
isTrue = Number(isTrue);

console.log(typeof intNum, intNum);
console.log(typeof floatNum, floatNum);
console.log(typeof isTrue, isTrue);

let combined = intNum + "5";
console.log(combined, typeof combined);

const user = { age: 25, name: "John", isStudent: false };
console.log(JSON.stringify(user));

let num1 = Number(prompt("Введіть перше число:"));
let num2 = Number(prompt("Введіть друге число:"));
let num3 = Number(prompt("Введіть третє число:"));

let avg = (num1 + num2 + num3) / 3;
console.log("Середнє арифметичне:", avg);

console.log("Модуль:", Math.abs(num1));
console.log("Округлення в більшу сторону:", Math.ceil(num2));
console.log("Округлення в меншу сторону:", Math.floor(num3));
console.log("Піднесення до степеня:", Math.pow(num1, 2));

console.log("Число ділиться на 5:", num1 % 5 === 0);
console.log("Число ділиться на 7:", num2 % 7 === 0);

if (num1 + num2 > num3 && num1 + num3 > num2 && num2 + num3 > num1) {
    console.log("Трикутник існує");
} else {
    console.log("Трикутник не існує");
}

let maxNum = Math.max(num1, num2, num3);
let minNum = Math.min(num1, num2, num3);
console.log("Найбільше:", maxNum);
console.log("Найменше:", minNum);

console.log("Є хоча б одне парне число:", num1 % 2 === 0, num2 % 2 === 0, num3 % 2 === 0);
console.log("Перевірка умови:", num1 > num2 && num2 < num3);

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log("Число", num1, "є простим:", isPrime(num1));


let name = prompt("Введіть ваше ім'я:");
let birthYear = Number(prompt("Введіть рік народження:"));
let city = prompt("Введіть місто проживання:");

const currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
console.log("Ваш вік:", age);

if (age < 12) console.log("Ви дитина");
else if (age < 18) console.log("Ви підліток");
else if (age < 60) console.log("Ви дорослий");
else console.log("Ви літня людина");

const capitals = ["Київ", "Лондон", "Вашингтон"];
console.log(city, capitals.includes(city) ? "є столицею" : "не є столицею");