// https://learn.javascript.ru/keys-values-entries
// Типы данных. Object.keys, values, entries

// #1 ---------------------------------------------------------------------------
/* // Сумма свойств объекта
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries() {
  
  let sum = 0
  
  for(let salary  of Object.values(salaries)) {
    sum += salary 
  }
  return sum
  console.log(sum)
}
// sumSalaries(salaries)
alert( sumSalaries(salaries) ); // 650


// Или, как вариант, мы можем получить сумму, используя методы Object.values и reduce:

// reduce перебирает массив значений salaries,
// складывает их
// и возвращает результат
// function sumSalaries(salaries) {
//   return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
// } */

// #2 ---------------------------------------------------------------------------

// Подсчёт количества свойств объекта
// Напишите функцию count(obj), которая возвращает количество свойств объекта:
// let user = {
//   name: 'John',
//   age: 30
// };
// alert( count(user) ); // 2
// Постарайтесь сделать код как можно короче.
// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные»

let user = {
  name: 'John',
  age: 30
};

function count() {

  return Object.keys(user).length;
}

alert( count(user) ); // 2