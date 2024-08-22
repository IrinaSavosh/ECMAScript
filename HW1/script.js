// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

// const arr = [1, 5, 7, 9];
// const min = Math.min(...arr);
// console.log(min);






// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

// function createCounter() {
//    let count = 0; // Переменная, недоступная напрямую

//    return {
//        increment: function() {
//            count += 1;
//            return count;
//        },
//        decrement: function() {
//            count -= 1;
//            return count;
//        }
//    };
// }

// const counter = createCounter();

// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.decrement()); // 1






// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);


// function findElementByClass(root, className) {
//    // Проверка на null или undefined, чтобы не выбивало ошибку при отсутствии элемента
//    if (root === null || root === undefined) {
//        return 'not found';
//    }

//    // Пррверка и возврат из рекурсии
//    if (root.classList && root.classList.contains(className)) {
//        return root;
//    }

//    // Рекурсия
//    for (const child of root.children) {
//        const found = findElementByClass(child, className);
//        if (found !== 'not found') {
//            return found;
//        }
//    }

//    return 'not found';
// }

// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);