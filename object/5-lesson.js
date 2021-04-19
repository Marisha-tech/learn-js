// Конструкторы, создание объектов через "new"
// https://learn.javascript.ru/constructor-new

// ---------------------------------------------------------------------------

// // Две функции - один объект
// // Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?

// // function A() { ... }
// // function B() { ... }

// // let a = new A;
// // let b = new B;

// // alert( a == b ); // true
// // Если да – приведите пример вашего кода.
// let obj = {}
// function A() {

//   return obj
// }

// function B() {

//   return obj
// }

// let a = new A;
// let b = new B;

// alert( a == b ); // true
// // Да, возможно.
// // Если функция возвращает объект, то вместо this будет возвращён этот объект.
// // Например, они могут вернуть один и тот же объект obj, определённый снаружи

// ---------------------------------------------------------------------------

/* // Создание калькулятора при помощи конструктора
// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// Например:
// let calculator = new Calculator();
// calculator.read();
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Calculator() {
  this.read = function () {
    this.oneValue = +prompt('Введите первое значение')
    this.twoValue = +prompt('Введите второе значение')
  }
  this.sum = function () {
    return this.oneValue + this.twoValue
  }
  this.mul = function () {
    return this.oneValue * this.twoValue
  }
}
let calculator = new Calculator()
calculator.read()
alert('Sum=' + calculator.sum())
alert('Mul=' + calculator.mul()) */


// ---------------------------------------------------------------------------
/* // Создаём Accumulator
// Напишите функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.
// Ниже вы можете посмотреть работу кода:
// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert(accumulator.value); // выведет сумму этих значений

function Accumulator(startingValue) {
  this.value = startingValue

  this.read = function () {
    this.value += +prompt('Сколько нужно добавить?', 0);
  }
}
 let accumulator = new Accumulator(0);
 accumulator.read();
 accumulator.read();
 alert('Accumulator = ' + accumulator.value); */

// ---------------------------------------------------------------------------
