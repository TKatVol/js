
 //const array = [1, 2, 3, 4, 5, 6];
// 
// const firstElement = elements[0];
// const lastElement = elements[elements.length-1];
// console.log('first element : ', firstElement);
// console.log('lastElement : ', lastElement);

//  function getExtremeElements(array) {
//    Пиши код ниже этой строки
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];
    //  
//   const newArray = [firstElement, lastElement];
//   console.log(newArray);  
 
 //   Пиши код выше этой строки
//   }
//  
// 
// getExtremeElements([1, 2, 3]);
 
// -------- 10 ------
// function splitMessage(message, delimeter) {
//   let words;
//  Пиши код ниже этой строки
    // words = message.split(delimeter);
    // console.log(words);
//  words = (delimeter);
//   
//   
//  Пиши код выше этой строки
//   return words;
// }
// 
// splitMessage('Манго спешит на поезд', ' ');
// splitMessage('Манго', '');

// const message = 'лучшее_за_неделю';
// const delimeter = '_';
// 
// let words;
// words = message.split(delimeter);
// 
// console.log(words);


// -------- 11 ------

// const message = 'JavaScript у меня в крови';
// const pricePerWord = 10;

// let total = 0;

// 1 порахувати кількість слів
// 2 помножити на ціну
// 3 повернути тотал 
// newMessage = message.split(' ').length;
// console.log(newMessage);

// total = newMessage * pricePerWord;
// console.log(total)



// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки
//     let total;

//     message = message.split(' ').length;
//     console.log(message);
//     console.log(pricePerWord);

//     total = message * pricePerWord;
//     console.log(total);

//    // return total;

//   // Пиши код выше этой строки
// }

// calculateEngravingPrice('JavaScript у меня в крови', 10);
// calculateEngravingPrice('JavaScript у меня в крови', 20);

//Вызов calculateEngravingPrice('JavaScript у меня в крови', 10) возвращает 50.
//Вызов calculateEngravingPrice('JavaScript у меня в крови', 20) возвращает 100.
//Вызов calculateEngravingPrice('Веб-разработка это творческая работа', 40) возвращает 160.
//Вызов calculateEngravingPrice('Веб-разработка это творческая работа', 20) возвращает 80.



// ---------14---------------

// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

// firstTwoEls - массив из первых двух элементов.
// nonExtremeEls - массив из всех элементов кроме первого и последнего.
// lastThreeEls - массив из трёх последних элементов.

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);



//----------15-----------
//Дополни код так, чтобы в переменной allClients получился массив 
//всех элементов массивов oldClients и newClients.

// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients); // Дополни эту строку



//----------16-----------
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива 
//со всеми элементами двух исходных firstArray и secondArray.
//Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, 
//функция должна вернуть копию массива длиной maxLength элементов.

// В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки

//       return firstArray.concat(secondArray).slice(0, maxLength);
    
//     // Пиши код выше этой строки
//   }
  
// makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3);
// makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4);

// Объявлена функция makeArray(firstArray, secondArray, maxLength)
// Вызов makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3) возвращает ['Манго', 'Поли', 'Аякс'].
// Вызов makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4) возвращает ['Манго', 'Поли', 'Хьюстон', 'Аякс'].
// Вызов makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3) возвращает ['Манго', 'Аякс', 'Челси'].
// Вызов makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 2) возвращает ['Земля', 'Юпитер'].
// Вызов makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4) возвращает ['Земля', 'Юпитер', 'Нептун', 'Уран'].
// Вызов makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0) возвращает [].
// Вызов функции makeArray() со случайными массивами и случайным числом возвращает правильный массив.



//----------17-----------
//Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1 ) { // Дополни эту строку
//   console.log(i);
// }



//----------18-----------
// Напиши функцию calculateTotal(number), которая принимает целое число(параметр number)
// и возвращает сумму всех целых чисел от единицы и до этого числа.
// Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.


// function calculateTotal(number) {
//   // Пиши код ниже этой строки

//     let total = 0;
  
//      for (let i = 0; i <= number; i += 1) {  
//      total += i;
//    }
//   return total;

//   // Пиши код выше этой строки
// }


// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(7);

// Объявлена функция calculateTotal(number).
// Вызов функции calculateTotal(1) возвращает 1.
// Вызов функции calculateTotal(3) возвращает 6.
// Вызов функции calculateTotal(7) возвращает 28.
// Вызов функции calculateTotal(18) возвращает 171.
// Вызов функции calculateTotal(24) возвращает 300.
// Вызов функции calculateTotal() со случайным числом возвращает правильное значение.



//----------19-----------
//Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i < fruits.length; i+=1 ) { // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// }



//----------20-----------
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел,
// и рассчитывает общую сумму его элементов.Общая сумма элементов должна сохраняться в переменной total,
// которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
//   for (let i = 0; i < order.length; i += 1){
//     total += order[i];

//   }
//   // Пиши код выше этой строки

//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4])

// Объявлена функция calculateTotalPrice(order).
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116.
// Вызов функции calculateTotalPrice() со случайным массивом возвращает правильное значение.




//----------21-----------
// Напиши функцию findLongestWord(string) которая принимает произвольную строку
// состоящую только из слов разделённых пробелом(параметр string) и возвращает самое длинное слово в этой строке.

//function findLongestWord(string) {
  // Пиши код ниже этой строки
  // string = string.split(' ');
  // let longestWord = string[0] ;
  
  // for (let i = 0; i < string.length; i += 1) {
    
  //     if (string[i].split('').length >= longestWord.length) {
  //     longestWord = string[i];

  //   }
  // }

  // return longestWord;
 
  // Пиши код выше этой строки
// }

// findLongestWord('The quick brown fox jumped over the lazy dog');
// findLongestWord('Google do a roll');
// findLongestWord('May the force be with you');


// Объявлена функция findLongestWord(string).
// Вызов функции findLongestWord('The quick brown fox jumped over the lazy dog') возвращает jumped.
// Вызов функции findLongestWord('Google do a roll') возвращает Google.
// Вызов функции findLongestWord('May the force be with you') возвращает force.
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение.




//----------22-----------
//Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
  // Пиши код ниже этой строки

    
  // for (let i = min; i <= max; i+=1) {
  //   numbers.push(i);
  // }
  
  // Пиши код выше этой строки
//   return numbers;
// }

// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);

// Объявлена функция createArrayOfNumbers(min, max).
// Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3].
// Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17].
// Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34].
// Вызов функции createArrayOfNumbers() со случайными min и max возвращает правильный массив.
// В цикле for использовался метод push.



//----------23-----------
//Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers)
//и возвращает новый массив, в котором будут только те элементы массива numbers, 
//которые больше чем значение параметра value(число).


// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filterNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filterNumbers.push(numbers[i]);
//     }
      
//   }

//   return filterNumbers;
 
//   // Пиши код выше этой строки
// }


// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);

// Объявлена функция filterArray(numbers, value).
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].
// Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив.
// В цикле for использовался метод push.


//----------24-----------
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), 
//и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:
// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.


// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
  

//   return fruits.includes(fruit); // Дополни эту строку
// }


// Объявлена функция checkFruit(fruit).
// Вызов checkFruit('слива') возвращает true.
// Вызов checkFruit('мандарин') возвращает false.
// Вызов checkFruit('груша') возвращает true.
// Вызов checkFruit('Груша') возвращает false.
// Вызов checkFruit('яблоко') возвращает true.
// Вызов функции checkFruit() со случайным словом возвращает правильное значение boolean.
// В функции использовался метод includes.

//----------25-----------

// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. 
//они присутствуют в обоих исходных массивах.А числа 0, 1 и 8 присутствуют только в одном из массивов.
// Напиши функцию getCommonElements(array1, array2) которая получает 
//два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, 
//состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//   const array3 = [];

//   for (let element of array1) {
  
//     if (array2.includes(element) ) {
//       array3.push(element);
//     }       

//   }
//   console.log(array3);
//   return array3;
  
//   // Пиши код выше этой строки
// }


// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);

// Объявлена функция getCommonElements(array1, array2).
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2].
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2].
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3].
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40].
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает [].
// Вызов функции getCommonElements() со случайными двумя массивами возвращает правильный массив.
// В цикле for использовались методы includes и push.




//----------26-----------
//Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for (let ord of order) {
//     total += ord;
//   }

//   // Пиши код выше этой строки
//   return total;
// }


// Объявлена функция calculateTotalPrice(order).
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116.
// Вызов функции calculateTotalPrice([]) возвращает 0.
// Вызов функции calculateTotalPrice() со случайным массивом чисел возвращает правильную сумму.


//----------27-----------
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   for (let number of numbers) {
    
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }

// Объявлена функция filterArray(numbers, value).
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].
// Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив.
// Функция calculateTotalPrice() использует цикл for..of.





//----------28-----------
// Дополни выражения остатка от деления так, чтобы код проходил тесты.



// 5 % 1 = 0
// // 5, разделенное на 1, равно 5, а остаток - 0

// 5 % 2 = 1
// //  5, разделенное на 2, равно 2, а остаток - 1

// 5 % 3 = 2
// //  5, разделенное на 3, равно 1, а остаток - 2

// 5 % 4 = 1
// //  5, разделенное на 4, равно 1, а остаток - 1

// 5 % 5 = 0
// //  5, разделенное на 5, равно 1, а остаток - 0

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;

// Объявлена переменная a.
// Значение переменной a это число 0.
// Объявлена переменная b.
// Значение переменной b это число 1.
// Объявлена переменная c.
// Значение переменной c это число 3.
// Объявлена переменная d.
// Значение переменной d это число 5.
// Объявлена переменная e.
// Значение переменной e это число 2.






//----------29-----------
//Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. 
//Чётным считается число которое делится на 2 без остатка.


// function getEvenNumbers(start, end) {
//     // Пиши код ниже этой строки
//   let numbers = [];

//   for (let i = start; i <= end; i+=1) {
//     if (i % 2 === 0) {
//       numbers.push(i);
//     }
//   }

//  // console.log(numbers);
// return numbers;
    
//     // Пиши код выше этой строки
//   }

// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);

// Объявлена функция getEvenNumbers(start, end).
// Вызов функции getEvenNumbers(2, 5) возвращает [2, 4].
// Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10].
// Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12].
// Вызов функции getEvenNumbers(8, 8) возвращает [8].
// Вызов функции getEvenNumbers(7, 7) возвращает [].
// Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив.





//----------30-----------
//Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// Объявлена переменная start со значением 6.
// Объявлена переменная end со значением 27.
// Объявлена переменная number без инициализации.
// Итоговое значение переменной number равно 10.
// В цикле for используется break для выхода до завершения всех итераций цикла.





//----------31-----------
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// возвращала первое число от start до end, которое делится на divisor без остатка;
// не использовала оператор break;
// не использовала переменную number.

// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return i;
//     }
//   }

//   return number;
//   // Пиши код выше этой строки
// }

// Объявлена функция findNumber(start, end, divisor).
// Вызов findNumber(2, 6, 5) возвращает 5.
// Вызов findNumber(8, 17, 3) возвращает 9.
// Вызов findNumber(6, 9, 4) возвращает 8.
// Вызов findNumber(16, 35, 7) возвращает 21.
// Вызов findNumber() со случайным набором чисел возвращает верный результат.
// В цикле for не должен использоваться break для выхода до завершения всех итераций цикла.


//----------32-----------
//Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

//При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).


function includes(array, value) {
  // Пиши код ниже этой строки
for (let number of array){
    if (number === value){
      return true;
    }
  }
  return false;


  
  // Пиши код выше этой строки
}

// Объявлена функция includes(array, value).
// Вызов includes([1, 2, 3, 4, 5], 3) возвращает true.
// Вызов includes([1, 2, 3, 4, 5], 17) возвращает false.
// Вызов includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер') возвращает true.
// Вызов includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран') возвращает false.
// Вызов includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива') возвращает true.
// Вызов includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви') возвращает false.
// Вызов includes() для случайного массива со случайным value возвращает верный boolean.
// В функции includes используется for, return, но не метод массива includes.