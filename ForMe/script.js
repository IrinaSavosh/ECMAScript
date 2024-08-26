
//разбор метода reduce 

// 1.
const numbers = [4, 12, 25, 7, 3, 19];
let maximum = numbers.reduce((max, current) => Math.max(max, current));
console.log(maximum);

// 2.
const words = ["Мы", "изучаем", "метод", "reduce", "в", "JavaScript"];
let text = words.reduce((text, current) => text + " " + current);
console.log(text);

// 3.Дан массив строк, представляющих разные цвета. Используя метод reduce, посчитай количество каждого цвета в массиве и верни объект, где ключами будут цвета, а значениями их количество.

const colors = ["красный", "синий", "зеленый", "синий", "красный", "синий"];

//1 вариант

let colorCounts = colors.reduce((counts, color) => {
	counts[color] = (counts[color] || 0) + 1;
	return counts;
}, {});

console.log(colorCounts);
//2 вариант

const countElements = (array) => {
	return array.reduce((acc, color) => {
		if (acc[color]) {
			acc[color]++;
		} else {
			acc[color] = 1;
		}
		return acc;
	}, {});
};

colorCounts = countElements(colors);
console.log(colorCounts);