let age = parseInt(prompt("Введіть ваш вік:"));
if (age <18 ) {
	alert("Вам заборонено вхід");
}else if (age <= 65 ){
	alert("Ласкаво просимо");
}else if (age > 65 ){
	alert("Будь ласка, будьте обережні!")
}


function printEvenNumbers() {
    let n = parseInt(prompt("Введіть число n:"));

    if (isNaN(n) || n < 2) {
        console.log("Будь ласка, введіть число більше або рівне 2.");
        return;
    }

    console.log(`Парні числа від 2 до ${n}:`);
    for (let i = 2; i <= n; i += 2) {
        console.log(i);
    }
}

printEvenNumbers();

function calculateFactorial() {
    let n = parseInt(prompt("Введіть число для обчислення факторіалу:"));

    if (isNaN(n) || n < 0) {
        console.log("Будь ласка, введіть додатне число.");
        return;
    }

    let factorial = 1;
    let i = 1;
    while (i <= n) {
        factorial *= i;
        i++;
    }

    console.log(`Факторіал ${n} = ${factorial}`);
}

calculateFactorial();

function calculator() {
    let a = parseFloat(prompt("Введіть перше число:"));
    let b = parseFloat(prompt("Введіть друге число:"));
    let operation = prompt("Введіть операцію (+, -, *, /):");

    if (isNaN(a) || isNaN(b)) {
        alert("Будь ласка, введіть коректні числа.");
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = b !== 0 ? a / b : "Помилка: ділення на нуль";
            break;
        default:
            alert("Невідома операція.");
            return;
    }

    alert(`Результат: ${result}`);
}

calculator();

function guessNumberGame(){
	let secretNumber = Math.floor(Math.random()* 100)+1;
	let guess;
	do{
		guess=parseInt(prompt("Вгадайте число від 1 до 100"));
		if (isNaN(guess)){
			alert("Будь ласка, введіть число.");
			continue;
		}
		if (guess < secretNumber){
			alert("Загадане число більше");
		}else if (guess > secretNumber){
			alert("Загадане число менше")
		} else{
			alert("Вітаємо! Ви вгадали число")
		}
	}while (guess !== secretNumber);

}
guessNumberGame();