let users = [
  { name: "Олена", age: 25 },
  { name: "Іра", age: 20 },
  { name: "Саша", age: 30 },
  { name: "Рома", age: 15 },
  { name: "Аня", age: 20 }
];
let adults = users.filter(user => user.age > 18);
let names = users.map(user => user.name);
let totalAge = users.reduce((sum, user) => sum + user.age, 0);
let averageAge = totalAge / users.length;
let youngest = users.reduce((youngest, user) => (user.age < youngest.age ? user : youngest));
let oldest = users.reduce((oldest, user) => (user.age > oldest.age ? user : oldest));
console.log("=== Користувачі старше 18 років ===");
adults.forEach(user => console.log(`${user.name}, ${user.age} років`)); // Виправлено тут
console.log("\n=== Усі імена користувачів ===");
console.log(names.join(", "));
console.log("\n=== Статистика ===");
console.log(`Середній вік користувачів: ${averageAge.toFixed(2)} років`);
console.log(`Наймолодший користувач: ${youngest.name}, ${youngest.age} років`);
console.log(`Найстарший користувач: ${oldest.name}, ${oldest.age} років`);





/*
1. Основні методи для масивів: push(), pop(), shift(), unshift(), map(), filter(), reduce(), sort(), find(), forEach().
2. Фільтрація: використовую filter(), наприклад, щоб залишити тільки повнолітніх.
3. Сортування: sort((a, b) => a - b) для чисел, sort((a, b) => a.name.localeCompare(b.name)) для об’єктів.
4. Ключі/значення об’єкта: Object.keys(obj), Object.values(obj), Object.entries(obj).
5. Середнє арифметичне: reduce() для суми, потім ділю на довжину масиву.
*/