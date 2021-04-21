// https://learn.javascript.ru/string
// Типы данных. Строки



// ---------------------------------------------------------------------------
// // Сделать первый символ заглавным
// // Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:ucFirst("вася") == "Вася";
// function ucFirst(str) {
//   if (!str) return str;

//   return str[0].toUpperCase() + str.slice(1);
// }

// alert( ucFirst("вася") ); // Вася

// // Мы не можем просто заменить первый символ, так как строки в JavaScript неизменяемы.
// // Но можно пересоздать строку на основе существующей, с заглавным первым символом:
// // let newStr = str[0].toUpperCase() + str.slice(1);
// // Однако есть небольшая проблемка. Если строка пуста, str[0] вернёт undefined, а у undefined нет метода toUpperCase(), поэтому мы получим ошибку.
// // Выхода два:
// // Использовать str.charAt(0), поскольку этот метод всегда возвращает строку (для пустой строки — пустую).
// // Добавить проверку на пустую строку.


// ---------------------------------------------------------------------------
/* // Проверка на спам
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

function checkSpam(str) {

  let lowerStr = str.toLowerCase(); //Для поиска без учёта регистра символов переведём всю строку в нижний регистр, а потом проверим, есть ли в ней искомые подстроки:

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
console.log(checkSpam('buy ViAgRA now')) 
console.log(checkSpam('free xxxxx')) 
console.log(checkSpam('innocent rabbit'))  */



// ---------------------------------------------------------------------------
/* // Усечение строки
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
// Например:
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
// truncate("Всем привет!", 20) = "Всем привет!"

// function truncate(str, maxlength) {
//   if(str.length > maxlength) {
    
//     let strAll = '...'
//     let strFinal = str.slice(0, maxlength-1)//Вот, что мне хотело
//     let strEnd = strFinal + strAll
    
//     return strEnd
    
//   } else {
//     return str
//   }
// }
// ИЛИ
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
console.log(truncate("Всем привет!", 20)) */



// ---------------------------------------------------------------------------
// Выделить число
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
// Например:
// alert( extractCurrencyValue('$120') === 120 ); // true

function extractCurrencyValue(str) {
  
  return +str.slice(1)

}
console.log(extractCurrencyValue('$120'))
alert( extractCurrencyValue('$120') === 120 );


// ---------------------------------------------------------------------------


