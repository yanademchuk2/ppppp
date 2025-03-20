function fetchData(id) {
	return new Promise((resolve) => {
		const daley = Math.floor(Math.random()*2000)+1000;
		setTimeout(() => {
			resolve('Data for ID: ${id} (Daley: ${daley} ms)');
		}, daley);
	});
};
async function processData() {
	try {
		console.log("Початок паралельного виконання...");
		const paralleResults = await Promise.all([
			fetchData(1),
			fetchData(2),
			fetchData(3)
		]);
		console.log("Результати паралельного виконання...");
		paralleResults.forEach(result => console.log(result));
		console.log("Початок паралельного виконання...");
		const ids =[];
		for await (const result of ids.map(id => fetchData(id))) {
			console.log(result);
		}
		console.log("Всі завдання виконано!");
	}   catch (error) {
		console.error("Сталась помилка:", error);
	}
}
processData();