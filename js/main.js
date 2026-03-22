const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

// Функція countItems тут
function countItems(array, condition) {
    let count = 0;
    for (const element of array) {
        if (condition(element)) {
            count++;
        }
    }
    return count;
}

// Умови для перевірки:
const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

// Тестування
console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));


// Функція calculate тут
function calculate (a, b, operation) {
    return operation(a, b);
}

// Стрілкові функції для операцій тут
const add = (a, b) => {
    return a + b;
}
const subtract = (a, b) => {
    return a - b;
}
const multiply = (a, b) => {
    return a * b;
}
const divide = (a, b) => {
    switch(b) {
        case 0:
            return `error: cant divide number by zero`;
        default:
            return a / b;
    }
}

// Тестування
console.log(calculate(10, 5, add));      // Повинно показати 15
console.log(calculate(10, 5, subtract)); // Повинно показати 5
console.log(calculate(10, 5, multiply)); // Повинно показати 50
console.log(calculate(10, 5, divide));   // Повинно показати 2
console.log(calculate(10, 0, divide));   // Повинно показати помилку


const userTimes = Number(prompt('enter how many times it will repeat'));
function repeatMessage(times, messageCreator) {
    const results = [];
    for (let i = 0; i < times; i++) {
        results.push(messageCreator(i));
    }
    return results;
}
const messages1 = repeatMessage(userTimes, (i) => {
    return `message №${i + 1}`;
});
console.log(messages1);


function processMovies(movies, action) {
    for (let i = 0; i < movies.length; i++) {
        action(movies[i], i);
    }
}

const showMovie = (movie, index) => {
    console.log(`${index + 1}. ${movie}`);
};
const showUpperCase = (movie, index) => {
    console.log(movie.toUpperCase());
};
const showLength = (movie, index) => {
    console.log(`"${movie}" has ${movie.length} symbols`);
};
processMovies(movies, showMovie);
processMovies(movies, showUpperCase);
processMovies(movies, showLength);