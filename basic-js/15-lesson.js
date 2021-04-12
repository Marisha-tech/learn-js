// Основы JavaScript
// Функции


/* // Обязателен ли "else"?
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Родители разрешили?');
//   }
// }
let age = prompt('Введите возраст')
function checkAge(age) {
  if (age > 18) {
    return true;
    console.log(age)
  } 
  // else {
    // console.log(age)
    return confirm('Родители разрешили?');
  // }
}

checkAge(age)

// Ответ: Оба варианта функций работают одинаково, отличий нет. */





/* // Перепишите функцию, используя оператор '?' или '||'
// Следующая функция возвращает true, если параметр age больше 18.

// В ином случае она задаёт вопрос confirm и возвращает его результат.
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// Тернарный оператор
let age = prompt('Введите возраст')
function checkAge(age) {
  age > 18 ? true : confirm('Родители разрешили?')
}
checkAge(age)

// ИЛИ
let age = prompt('Введите возраст')
function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}
checkAge(age) */




/* // Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function backMin (a, b) {
  return Math.min(a,b)
}

backMin(2, 5)
console.log(backMin(1, 1))
 */



/* // Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
function pow(x ,n) {
  return Math.pow(x, n)
}

pow(3, 2)
console.log(pow(1, 100)) */