// Создайте функцию mergeArrays, которая принимает два массива и возвращает новый массив, содержаций все элементыиз обоих массивов. Используйте spread оператор для объединения массивов.

/**1 version */
// function mergeArrays(arr1, arr2) {
// 	return [...arr1, ...arr2];
// }
// console.log(mergeArrays([1, 2, 3], [5, 6, 7]));

/**2 version */

// const allArrays = (arr1, arr2) => [...arr1, ...arr2];
// console.log(mergeArrays([1, 2, 3], [4, 5, 6, 7]));

// Создайте функцию removeDuplicates, которая принмает количество аргументов и возвращает новый массив, содержащий только уникальные значения. Используйте rest оператор для сбора всех аргумертов,а затем filter для определения дубликатов.

// function removeDuplicates(...args) {
// 	return args.filter((val, index) =>args.indexOf(val) === index);
// }
// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

// Напишите функцию getEvenNumbers, который принимает массив чисел в качестве аргумента и возвращает новый массив, содержащий только четные числа.

// function getEvenNumbers(numbers){
//    return numbers.filter(item=> item %2 === 0);
// }

// const getEvenNumbers = (numbers) => numbers.filter(item => item %2 ===0);
// console.log(getEvenNumbers([1, 2, 3, 4, 5]));

// Напишите функию calculateAverage, которая принимает массив чисел в качестве аргумента и возвращает среднее значение чисел.

// const calculateAverage = (num) => {
// const sum = num.reduce ((acc, item) => acc + item, 0);
// return sum/num.length;
// }
// console.log(calculateAverage([1, 2, 3, 4, 5]));

// Напишите функцию capitalizeFirstLetter, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первая буква каждого слова является заглавной.

// const capitalizeFirstLetter = (str) => {
// return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }

// console.log(capitalizeFirstLetter('hello world'));

// Напишите функцию createCalculator, которая принимает начальное значение и возвращает объект с двумя методами: add и substract. Метод add долэен увеличивать згначение на переданное число, а метод substract должен уменьшать згначениена переданное число. значение должно быть доступно только через методы объекта, а не напрямую

// function createCalculator(initialValue) {
// 	let value = initialValue;
// 	return {
// 		add: function (num) {
// 			value += num;
// 		},
// 		substract: function (num) {
// 			value -= num;
// 		},
// 		getValue: function () {
// 			return value;
// 		},
// 	};
// }
// const calculator = createCalculator(100);
// calculator.add(5);//15
// calculator.substract(2);//13
// calculator.substract(2);//11

// console.log(calculator.getValue());


// Напишите функцию createGreeting, которая принимает имя пользователя и возвращает функцию, которая будет выводить приветствие с использованием этого имени.

// Пример:
// const greeting = createGreeting('John');
// greeting(); //Ожидаемый результат: Hello, John!

function createGreeting(user){
   return function(){
      console.log(`Hello, ${user}!`);
   }
}
const greeting = createGreeting('John');
greeting();