/* https://learn.javascript.ru/object#tasks
Объекты: основы
Объекты */




/*1. // Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user) */



/* // 2. Проверка на пустоту
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

let schedule = {}
schedule.time = ['8:30' , '9:30']

function isEmpty(schedule) {
  for (let key in schedule) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    console.log(false)
    return false;
  }
  console.log(true)
  return true;
}
isEmpty(schedule.time) */





/* // 3. Объекты-константы?
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
  name: "John"
};

// это будет работать?
user.name = "Pete"; //Конечно, это сработает без проблем. Объявление const защищает только саму переменную от изменений. Другими словами, user хранит ссылку на объект. И это не может быть изменено. Но содержимое объекта менять можно.
console.log(user) */




/* // 4. Сумма свойств объекта
// У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0

  for(let key in salaries){
    sum+= salaries[key]
  }
console.log(sum) */




// 5. Умножаем все числовые свойства на 2
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2
// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// P.S. Используйте typeof для проверки, что значение свойства числовое.

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(menu){

  for (let key in menu) {

    if (typeof menu[key] == 'number') {
      menu[key] *= 2;
      console.log(menu)
    }

  }

}

multiplyNumeric(menu)