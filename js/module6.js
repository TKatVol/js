// ----------- 1 ------------

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел,
//     и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и
// возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   orderedItems.forEach(function (item) {
//    totalPrice += item;
//   });
  
//   return totalPrice;
  
//   // Пиши код выше этой строки
  
// }

// Объявлена функция calculateTotalPrice(orderedItems).
// Для перебора массива orderedItems использован метод forEach.
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.




// ----------- 2 ------------

// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив,
//     в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
//   numbers.forEach( function(number) {
//     if (number > value) {
//         filteredNumbers.push(number);
//     };
//   });
  
//      // Пиши код выше этой строки
//     return filteredNumbers;
//   }
  
// filterArray([1, 2, 3, 4, 5], 3)

// Объявлена функция filterArray(numbers, value).
// Для перебора массива numbers использован метод forEach.
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.




// ----------- 3 ------------

// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины
// в параметры firstArray и secondArray, и возвращает новый массив их общих элементов,
//     то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
  
//     firstArray.forEach(function (element) {
        
//         if (secondArray.includes(element)) {
//          commonElements.push(element);
//        };
//     });
  
//     return commonElements;
//     // Пиши код выше этой строки
//   }

//   getCommonElements([1, 2, 3], [2, 4])

// Объявлена функция getCommonElements(firstArray, secondArray).
// Для перебора параметра (массива) использован метод forEach.
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2].
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2].
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3].
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40].
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает [].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.




// ----------- 4 ------------

// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

// // Пиши код ниже этой строки

// const calculateTotalPrice = 
//       (quantity, pricePerItem) => {

//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

// Объявлена переменная calculateTotalPrice.
// Переменной calculateTotalPrice присвоена стрелочная функция с параметрами (quantity, pricePerItem).
// Вызов calculateTotalPrice(5, 100) возвращает 500.
// Вызов calculateTotalPrice(8, 60) возвращает 480.
// Вызов calculateTotalPrice(3, 400) возвращает 1200.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.




// ----------- 5 ------------

// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.

// // Пиши код ниже этой строки
// const calculateTotalPrice = 
//  (quantity, pricePerItem) => quantity * pricePerItem;
// // Пиши код выше этой строки

// Объявлена переменная calculateTotalPrice.
// Переменной calculateTotalPrice присвоена стрелочная функция с параметрами (quantity, pricePerItem).
// В функции использован неявный возврат.
// Вызов calculateTotalPrice(5, 100) возвращает 500.
// Вызов calculateTotalPrice(8, 60) возвращает 480.
// Вызов calculateTotalPrice('3, 400) возвращает 1200.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.




// ----------- 6 ------------

// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию.
// Замени коллбек - функцию передаваемую в метод forEach() на стрелочную функцию.

// // Пиши код ниже этой строки
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => totalPrice += item);

//   return totalPrice;
// }
// // Пиши код выше этой строки


// Объявлена переменная calculateTotalPrice.
// Переменной calculateTotalPrice присвоена стрелочная функция с параметром (orderedItems).
// Для перебора массива orderedItems использован метод forEach.
// Коллбек для метода forEach это стрелочная функция.
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.




// ----------- 7 ------------

// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// // Пиши код ниже этой строки.
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach(
//       number => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }


// Объявлена переменная filterArray.
// Переменной filterArray присвоена стрелочная функция с параметрами (numbers, value).
// Для перебора массива numbers использован метод forEach.
// Коллбек для метода forEach это стрелочная функция.
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.




// ----------- 8 ------------

// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// // Пиши код ниже этой строки
// const getCommonElements = 
//    (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach( element=> {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return commonElements;
//   }


// Объявлена переменная getCommonElements.

// Переменной getCommonElements присвоена стрелочная функция с параметрами (firstArray, secondArray).
// Для перебора массива firstArray использован метод forEach.
// Коллбек для метода forEach это стрелочная функция.
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2].
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2].
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3].
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40].
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает [].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.




// ----------- 9 ------------

// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент,
//     значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers,
//     а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//   const newEven = [];
  
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//           number += value;
//     }
    
//     newEven.push(number);
//   });
    
//   return newEven;

//     // Пиши код выше этой строки
//   }

// changeEven([1, 2, 3, 4, 5], 10)

// Объявлена функция changeEven(numbers, value).
// Функция changeEven не изменяет значение параметра numbers.
// Вызов changeEven([1, 2, 3, 4, 5], 10) возвращает новый массив [1, 12, 3, 14, 5].
// Вызов changeEven([2, 8, 3, 7, 4, 6], 10) возвращает новый массив [12, 18, 3, 7, 14, 16].
// Вызов changeEven([17, 24, 68, 31, 42], 100) возвращает новый массив [17, 124, 168, 31, 142].
// Вызов changeEven([44, 13, 81, 92, 36, 54], 100) возвращает новый массив [144, 13, 81, 192, 136, 154].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.




// ----------- 10 ------------

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

// const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

// const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// // Оригинальный массив не изменился
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер']



// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет.
// Обязательно используй метод map().

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map( (planet) => planet.length );

// Объявлена переменная planets.
// Значение переменной planets это массив ['Земля', 'Марс', 'Венера', 'Юпитер'].
// Объявлена переменная planetsLengths.
// Значение переменной planetsLengths это массив [5, 4, 6, 6].
// Для перебора массива планет использован метод map().




// ----------- 11 ------------

// Используя метод map() сделай так, чтобы в переменной titles получился массив
// названий книг(свойство title) из всех объектов массива books.

// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
  
//   const titles = books.map ( book => book.title);

// Объявлена переменная books.
// Значение переменной books это массив.
// Объявлена переменная titles.
// Значение переменной titles это массив ['Последнее королевство', 'На берегу спокойных вод', 
//'Сон смешного человека', 'Красна как кровь', 'Враг Божий'].
// Для перебора массива books используется метод map() как чистая функция.


// ----------- 12 ------------

// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив
// всех жанров книг(свойство genres) из массива книг books.

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
  
//   const genres = books.flatMap( book => book.genres);


// Объявлена переменная books.
// Значение переменной books это массив объектов.
// Объявлена переменная genres.
// Значение переменной genres это массив [ 'приключения', 'историческое', 'фантастика', 'ужасы', 'мистика' ].
// Для перебора массива books используется метод flatMap().



// ----------- 13 ------------

// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей(свойство name)
// из массива объектов в параметре users.

// // Пиши код ниже этой строки
// const getUserNames = users => 
//     users.map( user => user.name)

  
//   // Пиши код выше этой строки

// Объявлена переменная getUserNames.
// Переменной getUserNames присвоена стрелочная функция с параметром (users).
// Для перебора параметра users используется метод map().
// Вызов функции с указанным массивом пользователей возвращает массив
// ['Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr',
// 'Blackburn Dotson', 'Sheree Anthony'].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.



// ----------- 14 ------------

// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов
// пользователей(свойство email) из массива объектов в параметре users.

// // Пиши код ниже этой строки
// const getUserEmails = users => 
//   users.map( user => user.email);
//   // Пиши код выше этой строки

// Объявлена переменная getUserNames.
// Переменной getUserNames присвоена стрелочная функция с параметром (users).
// Для перебора параметра users используется метод map().
// Вызов функции с указанным массивом пользователей возвращает массив
//['moorehensley@indexia.com', 'sharlenebush@tubesys.com', 'rossvazquez@xinware.com',
//    'elmahead@omatom.com', 'careybarr@nurali.com', 'blackburndotson@furnigeer.com', 'shereeanthony@kog.com'].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.


// ----------- 15 ------------

// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers,
//     а в переменной oddNumbers массив нечётных.Обязательно используй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// Объявлена переменная numbers.
// Значение переменной numbers это массив [17, 24, 82, 61, 36, 18, 47, 52, 73].
// Объявлена переменная evenNumbers.
// Значение переменной evenNumbers это массив [24, 82, 36, 18, 52].
// Объявлена переменная oddNumbers.
// Значение переменной oddNumbers это массив [17, 61, 47, 73].
// Для перебора массива numbers использован метод filter().



// ----------- 16 ------------

// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг(свойство genres)
// из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.


// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter(
//     (genre, index, array) => array.indexOf(genre) === index
//   );


// Объявлена переменная books.
// Значение переменной books это массив объектов.
// Объявлена переменная allGenres.
// Значение переменной allGenres это массив['приключения', 'историческое', 'фантастика',
//     мистика', 'ужасы', 'мистика', 'приключения'].
// Объявлена переменная uniqueGenres.
// Значение переменной uniqueGenres это массив['приключения', 'историческое',
//     'фантастика', 'мистика', 'ужасы'].
// Для вычисления значения переменной allGenders использован метод flatMap().
// Для вычисления значения переменной uniqueGenres использован метод filter().



// ----------- 17 ------------

// Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг рейтинг которых(свойство rating)
// больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем(свойство author)
// которое совпадает со значением в переменной AUTHOR.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter(
//   book => book.rating >= MIN_RATING
// );
// const booksByAuthor = books.filter(
//   book => book.author === AUTHOR
// );

// Объявлена переменная books.
// Значение переменной books это массив объектов.
// Объявлена переменная MIN_RATING.
// Значение переменной MIN_RATING это число 8.
// Объявлена переменная AUTHOR.
// Значение переменной AUTHOR это строка 'Бернард Корнуэлл'.
// Объявлена переменная topRatedBooks.
// Значение переменной topRatedBooks это массив книг с рейтингов выше 8.
// Объявлена переменная booksByAuthor.
// Значение переменной booksByAuthor это массив книг автор которых 'Бернард Корнуэлл'.
// Для перебора массива books использован метод filter().


// ----------- 18 ------------

// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей
// у которых цвет глаз(свойство eyeColor) совпадает со значением параметра color.

// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => 
//   users.filter(user => user.eyeColor === color);

// // Пиши код выше этой строки

// Объявлена переменная getUsersWithEyeColor.
// Переменной getUsersWithEyeColor присвоена стрелочная функция с параметрами (users, color).
// Для перебора параметра users используется метод filter().
// Если значение параметра color это 'blue', функция возвращает массив объектов пользователей
// с именами Moore Hensley, Sharlene Bush и Carey Barr.
// Если значение параметра color это 'green', функция возвращает массив объектов пользователей
// с именами Ross Vazquez и Elma Head.
// Если значение параметра color это 'brown', функция возвращает массив объектов пользователей
// с именами Blackburn Dotson и Sheree Anthony.
// Если значение параметра color это любая другая строка, функция возвращает пустой массив.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.



// ----------- 19 ------------

// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей,
//     возраст которых(свойство age) попадает в промежуток от minAge до maxAge.

// // Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => 
//  users.filter( 
//    user => user.age > minAge && user.age < maxAge
//  );
// // Пиши код выше этой строки


// Объявлена переменная getUsersWithAge.
// Переменной getUsersWithAge присвоена стрелочная функция с параметрами (users, minAge, maxAge).
// Для перебора параметра users используется метод filter().
// Если значение параметров minAge и maxAge равны 20 и 30 соотвественно, функция возвращает
// массив объектов пользователей с именами Ross Vazquez, Elma Head и Carey Barr.
// Если значение параметров minAge и maxAge равны 30 и 40 соотвественно, функция возвращает
// массив объектов пользователей с именами Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony.
// Если значение параметров minAge и maxAge равны 80 и 100 соотвественно, функция возвращает пустой массив.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

// ----------- 20 ------------

// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей
// у которых есть друг с именем в параметре friendName.Массив друзей пользователя хранится в свойстве friends.

// // Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => 
//    users.filter(
//     user => user.friends.includes(friendName));
// // Пиши код выше этой строки



// Объявлена переменная getUsersWithFriend.
// Переменной getUsersWithFriend присвоена стрелочная функция с параметрами (users, friendName).
// Для перебора параметра users используется метод filter().
// Если значение параметра friendName это строка 'Briana Decker', функция возвращает массив
// объектов пользователей с именами Sharlene Bush и Sheree Anthony.
// Если значение параметра friendName это строка 'Goldie Gentry', функция возвращает массив
// объектов пользователей с именами Elma Head и Sheree Anthony.
// Если значение параметра friendName это строка 'Adrian Cross', функция возвращает пустой массив.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.


// ----------- 21 ------------

// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей
//     (свойство friends).У нескольких пользователей могут быть одинаковые друзья,
//     сделай так чтобы возвращаемый массив не содержал повторений.
        
// // Пиши код ниже этой строки
// const getFriends = (users) => 
  
//   users.flatMap( user => user.friends)
//   .filter(
//     (friend, index, array) => 
//     array.indexOf(friend) === index
//   );
// // Пиши код выше этой строки



// Объявлена переменная getFriends.
// Переменной getFriends присвоена стрелочная функция с параметром (users).
// Вызов функции с указанным массивом пользователей возвращает массив
// ['Sharron Pace', 'Briana Decker', 'Marilyn Mcintosh', 'Padilla Garrison',
//     'Naomi Buckner', 'Goldie Gentry', 'Aisha Tran', 'Jordan Sampson', 'Eddie Strong',
//     'Jacklyn Lucas', 'Linda Chapman'].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.



// ----------- 22 ------------

// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей,
//     значение свойства isActive которых true.

// // Пиши код ниже этой строки
// const getActiveUsers = (users) => 
//   users.filter(
//     user => user.isActive);
// // Пиши код выше этой строки



// Объявлена переменная getActiveUsers. Переменной getActiveUsers присвоена стрелочная функция с параметром users.
// Для перебора параметра users используется метод filter().
// Вызов функции с указанным массивом пользователей возвращает массив объектов пользователей
// с именами Sharlene Bush, Elma Head, Carey Barr и Sheree Anthony.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.


// ----------- 23 ------------

// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей,
//     значение свойства isActive которых false.

// // Пиши код ниже этой строки
// const getInactiveUsers = (users) => 
//   users.filter(
//     user => !user.isActive
//   );
// // Пиши код выше этой строки

// Объявлена переменная getInactiveUsers.

// Переменной getInactiveUsers присвоена стрелочная функция с параметром users.
// Для перебора параметра users используется метод filter().
// Вызов функции с указанным массивом пользователей возвращает массив объектов пользователей
// с именами Moore Hensley, Ross Vazquez и Blackburn Dotson.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.


// ----------- 24 ------------

// Используя метод find() дополни код так, чтобы:

// В переменной bookWithTitle получился объект книги название которой(свойство title)
// совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который(свойство author)
// совпадает со значением переменной AUTHOR.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find(
//   book => book.title === BOOK_TITLE
// );
// const bookByAuthor = books.find(
//   book => book.author === AUTHOR
// );



// Значение переменной books это массив.
// Объявлена переменная BOOK_TITLE.
// Значение переменной BOOK_TITLE это строка 'Сон смешного человека'.
// Объявлена переменная AUTHOR.
// Значение переменной AUTHOR это строка 'Роберт Шекли'.
// Объявлена переменная bookWithTitle.
// Значение переменной bookWithTitle это объект книги с названием выше 'Сон смешного человека'.
// Объявлена переменная bookByAuthor.
// Значение переменной bookByAuthor это объект книги автора 'Роберт Шекли'.
// Для перебора массива books использован метод find().


// ----------- 25 ------------

// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя,
//     почта которого(свойство email) совпадает со значением параметра email.

// // Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => 
//    users.find( user => user.email === email);
// // Пиши код выше этой строки



// Объявлена функция getUserWithEmail(users, email).
// Для перебора параметра users используется метод find().
// Если значение параметра email это 'shereeanthony@kog.com', функция возвращает объект
// пользователя с именем Sheree Anthony.
// Если значение параметра email это 'elmahead@omatom.com', функция возвращает объект
// пользователя с именем Elma Head.
// Если значение параметра email это 'blackburndotson@furnigeer.com', функция возвращает
// объект пользователя с именем Blackburn Dotson.
// Если в массиве users нет пользователя с почтой из параметра email, функция возвращает undefined.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.



// ----------- 26 ------------

// Используя метод every() дополни код так, чтобы:

// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every(
//   element => element % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(
//   element => element % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(
//   element => element % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(
//   element => element % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(
//   element => element % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(
//   element => element % 2 !== 0);


// Объявлена переменная firstArray.
// Значение переменной firstArray это массив [26, 94, 36, 18].
// Объявлена переменная secondArray.
// Значение переменной secondArray это массив [17, 61, 23].
// Объявлена переменная thirdArray.
// Значение переменной thirdArray это массив [17, 26, 94, 61, 36, 23, 18].
// Объявлена переменная eachElementInFirstIsEven.
// Значение переменной eachElementInFirstIsEven это буль true.
// Объявлена переменная eachElementInFirstIsOdd.
// Значение переменной eachElementInFirstIsOdd это буль false.
// Объявлена переменная eachElementInSecondIsEven.
// Значение переменной eachElementInSecondIsEven это буль false.
// Объявлена переменная eachElementInSecondIsOdd.
// Значение переменной eachElementInSecondIsOdd это буль true.
// Объявлена переменная eachElementInThirdIsEven.
// Значение переменной eachElementInThirdIsEven это буль false.
// Объявлена переменная eachElementInThirdIsOdd.
// Значение переменной eachElementInThirdIsOdd это буль false.
// Для перебора массивов использован метод every().



// ----------- 27 ------------

// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли
// пользователи сейчас активны(свойство isActive) и возвращала true или false.

// // Пиши код ниже этой строки
// const isEveryUserActive = (users) => 
//  users.every( user => user.isActive);
// // Пиши код выше этой строки

// Объявлена переменная isEveryUserActive
// Переменной isEveryUserActive присвоена стрелочная функция с параметром (users).
// Для перебора параметра users используется метод every().
// Вызов функции с указанным массивом пользователей возвращает false.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.


// ----------- 28 ------------

// Используя метод some() дополни код так, чтобы:

// В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some(
//   element => element % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(
//   element => element % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(
//   element => element % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(
//   element => element % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(
//   element => element % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(
//   element => element % 2 !== 0);



// Объявлена переменная firstArray.
// Значение переменной firstArray это массив [26, 94, 36, 18].
// Объявлена переменная secondArray.
// Значение переменной secondArray это массив [17, 61, 23].
// Объявлена переменная thirdArray.
// Значение переменной thirdArray это массив [17, 26, 94, 61, 36, 23, 18].
// Объявлена переменная anyElementInFirstIsEven.
// Значение переменной anyElementInFirstIsEven это буль true.
// Объявлена переменная anyElementInFirstIsOdd.
// Значение переменной anyElementInFirstIsOdd это буль false.
// Объявлена переменная anyElementInSecondIsEven.
// Значение переменной anyElementInSecondIsEven это буль false.
// Объявлена переменная anyElementInSecondIsOdd.
// Значение переменной anyElementInSecondIsOdd это буль true.
// Объявлена переменная anyElementInThirdIsEven.
// Значение переменной anyElementInThirdIsEven это буль true.
// Объявлена переменная anyElementInThirdIsOdd.
// Значение переменной anyElementInThirdIsOdd это буль true.
// Для перебора массивов использован метод some().


// ----------- 29 ------------

// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие
// активных пользователей(свойство isActive) и возвращала true или false.

// // Пиши код ниже этой строки
// const isAnyUserActive = users => 
//   users.some(user => user.isActive);
// // Пиши код выше этой строки

// Объявлена функция isAnyUserActive(users).
// Для перебора параметра users используется метод some().
// Вызов функции с указанным массивом пользователей возвращает true.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.


// ----------- 30 ------------

// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх.
// Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce( 
//   (total, time) => total + time, 0    
//   );

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;


// Объявлена переменная players.
// Значение переменной players это объект игроков с игровым временем каждого.
// Объявлена переменная playtimes.
// Значение переменной playtimes это массив [1270, 468, 710, 244].
// Объявлена переменная totalPlayTime.
// Значение переменной totalPlayTime это число 2692.
// Для перебора массива playtimes используется метод reduce().
// Объявлена переменная averagePlayTime.
// Значение переменной averagePlayTime это число 673.




// ----------- 31 ------------

// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока,
//     и получить общую сумму этих времён.Рассчитать время для каждого из игроков,
//     можно разделив его время(свойство playtime) на количество игр(свойство gamesPlayed).
        
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce(
//   (total, player) => 
//     total + player.playtime / player.gamesPlayed, 0
// );


// Объявлена переменная players.
// Значение переменной players это массив объектов игроков.
// Объявлена переменная totalAveragePlaytimePerGame.
// Значение переменной totalAveragePlaytimePerGame это число 1023.
// Для перебора массива players используется метод reduce().


// ----------- 32 ------------

// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала
// сумму всех средств(свойство balance) которые хранят пользователи из массива users.

// // Пиши код ниже этой строки
// const calculateTotalBalance = users => 
//   users.reduce(
//     (total, user) => total + user.balance, 0
//   );
// // Пиши код выше этой строки


// Объявлена переменная calculateTotalBalance.
// Переменной calculateTotalBalance присвоена стрелочная функция с параметром (users).
// Для перебора параметра users используется метод reduce().
// Вызов функции с указанным массивом пользователей возвращает число 20916.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.


// ----------- 33 ------------

// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее
// количество друзей(свойство friends) всех пользователей из массива users.

// // Пиши код ниже этой строки
// const getTotalFriendCount = users => 
//   users.reduce(
//    (total, user) => total + user.friends.length, 0
//   );
// // Пиши код выше этой строки


// Объявлена переменная getTotalFriendCount.
// Переменной getTotalFriendCount присвоена стрелочная функция с параметром (users).
// Для перебора параметра users используется метод reduce().
// Вызов функции с указанным массивом пользователей возвращает число 14
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.


// ----------- 34 ------------

// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная
// по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors
// копия массива имён авторов authors отсортированная в по алфавиту.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();


// Объявлена переменная releaseDates.
// Значение переменной releaseDates это массив [2016, 1967, 2008, 1984, 1973, 2012, 1997].
// Объявлена переменная authors.
// Значение переменной authors это массив ['Ли Танит', 'Бернард Корнуэлл', 'Роберт Шекли', 'Федор Достоевский'].
// Объявлена переменная ascendingReleaseDates.
// Значение переменной ascendingReleaseDates это массив [1967, 1973, 1984, 1997, 2008, 2012, 2016].
// Объявлена переменная alphabeticalAuthors.
// Значение переменной alphabeticalAuthors это массив['Бернард Корнуэлл', 'Ли Танит',
//     'Роберт Шекли', 'Федор Достоевский'].
// Использован метод sort().



// ----------- 35 ------------

// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания,
//     по её возрастанию или убыванию.
// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная
// по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates
// копия отсортированная по убыванию.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort(
//   (a, b) => a - b 
// );

// const descendingReleaseDates = [...releaseDates].sort(
//   (a, b) => b - a
// );


// Объявлена переменная releaseDates.
// Значение переменной releaseDates это массив [2016, 1967, 2008, 1984, 1973, 2012, 1997].
// Объявлена переменная ascendingReleaseDates.
// Значение переменной ascendingReleaseDates это массив [1967, 1973, 1984, 1997, 2008, 2012, 2016].
// Объявлена переменная descendingReleaseDates.
// Значение переменной descendingReleaseDates это массив [2016, 2012, 2008, 1997, 1984, 1973, 1967].
// Использован метод sort().


// ----------- 36 ------------

// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору,
//     в алфавитном и обратном алфавитном порядке.Дополни код так,
//     чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту
// копия массива authors, а в переменной authorsInReversedOrder копия отсортированная
// в обратном алфавитном порядке.

// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки
  
//   const authorsInAlphabetOrder = [...authors].sort(
//     (a, b) => a.localeCompare(b)
//   );
  
//   const authorsInReversedOrder = [...authors].sort(
//     (a, b) => b.localeCompare(a)
//   );


// Объявлена переменная authors.
// Значение переменной authors это массив['Ли Танит', 'Бернард Корнуэлл', 'Роберт Шекли',
//     'Федор Достоевский', 'Говард Лавкрафт'].
// Объявлена переменная authorsInAlphabetOrder.
// Значение переменной authorsInAlphabetOrder это массив['Бернард Корнуэлл', 'Говард Лавкрафт',
//     'Ли Танит', 'Роберт Шекли', 'Федор Достоевский'].
// Объявлена переменная authorsInReversedOrder.
// Значение переменной authorsInReversedOrder это массив['Федор Достоевский', 'Роберт Шекли',
//     'Ли Танит', 'Говард Лавкрафт', 'Бернард Корнуэлл'].
// Использован метод sort().


// ----------- 37 ------------

// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора
// в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort(
//   (firstBook, secondBook) => 
//     firstBook.author.localeCompare(secondBook.author)
// );

// const sortedByReversedAuthorName = [...books].sort(
//   (firstBook, secondBook) => 
//     secondBook.author.localeCompare(firstBook.author)
// );

// const sortedByAscendingRating = [...books].sort(
//   (firstBook, secondBook) => 
//     firstBook.rating - secondBook.rating
// );

// const sortedByDescentingRating = [...books].sort(
//   (firstBook, secondBook) => 
//     secondBook.rating - firstBook.rating
// );


// Объявлена переменная books.
// Значение переменной books это исходный массив объектов книг.
// Объявлена переменная sortedByAuthorName.
// Значение переменной sortedByAuthorName это массив книг отсортированный по имени автора в алфавитном порядке.
// Объявлена переменная sortedByReversedAuthorName.
// Значение переменной sortedByReversedAuthorName это массив книг отсортированный
// по имени автора в обратном алфавитном порядке.
// Объявлена переменная sortedByAscendingRating.
// Значение переменной sortedByAscendingRating это массив книг отсортированный по возрастанию рейтинга.
// Объявлена переменная sortedByDescentingRating.
// Значение переменной sortedByDescentingRating это массив книг отсортированный по убыванию рейтинга.
// Для перебора массива books используется метод sort().


// ----------- 38 ------------

// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей
// отсортированный по возрастанию их баланса(свойство balance).

// // Пиши код ниже этой строки
// const sortByAscendingBalance = users => 
//   users.sort( 
//     (firstUser, secondUser) => 
//     firstUser.balance - secondUser.balance
//   );
// // Пиши код выше этой строки


// Объявлена переменная sortByAscendingBalance.
// Переменной sortByAscendingBalance присвоена стрелочная функция с параметром (users).
// Значение параметра users не изменяется.
// Вызов функции с указанным массивом пользователей возвращает новый массив пользователей
// отсортированный по возрастанию их баланса.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
// Для перебора параметра users использован метод sort().


// ----------- 39 ------------

// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей
// отсортированный по убыванию количества их друзей(свойство friends).


// // Пиши код ниже этой строки
// const sortByDescendingFriendCount = users => 
//   [...users].sort(
//     ( firstUser, secondUser) =>
//       secondUser.friends.length - firstUser.friends.length
//   );
// // Пиши код выше этой строки


// Объявлена переменная sortByDescendingFriendCount.
// Переменной sortByDescendingFriendCount присвоена стрелочная функция с параметром (users).
// Значение параметра users не изменяется.
// Для перебора параметра users использован метод sort().
// Вызов функции с указанным массивом пользователей возвращает новый массив пользователей
// отсортированный по убыванию количества их друзей.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.


// ----------- 40 ------------

// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей
// отсортированный по их имени(свойство name) в алфавитном порядке.

// // Пиши код ниже этой строки
// const sortByName = users => 
//   [...users].sort(
//     (firstUser, secondUser) =>
//       firstUser.name.localeCompare(secondUser.name)
//   );
// // Пиши код выше этой строки


// Объявлена переменная sortByName.
// Переменной sortByName присвоена стрелочная функция с параметром (users).
// Значение параметра users не изменяется.
// Для перебора параметра users использован метод sort().
// Вызов функции с указанным массивом пользователей возвращает новый массив пользователей
// отсортированный по имени в алфавитном порядке.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.


// ----------- 41 ------------

//Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке,
//    рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = [...books]
//  .sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author) )
//     .filter(book => book.rating > MIN_BOOK_RATING)
//     .map(book => book.author);


// Объявлена переменная books.
// Значение переменной books это исходный массив объектов.
// Объявлена переменная MIN_BOOK_RATING.
// Значение переменной MIN_BOOK_RATING это число 8.
// Объявлена переменная names.
// Значение переменной names это массив ['Бернард Корнуэлл', 'Говард Лавкрафт', 'Ли Танит', 'Роберт Шекли'].
// Нет объявленых переменных кроме books, MIN_BOOK_RATING и names.
// Используется цепочка методов filter, map, sort.


// ----------- 42 ------------

// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей
// отсортированный по возрастанию количества их друзей(свойство friends).

// // Пиши код ниже этой строки
// const getNamesSortedByFriendCount = users => 
//   [...users]
// .sort((firstUser, secondUser) =>
//      firstUser.friends.length - secondUser.friends.length)
//     .map(user => user.name)
    
// ;
// // Пиши код выше этой строки


// Объявлена переменная getNamesSortedByFriendCount.
// Переменной getNamesSortedByFriendCount присвоена стрелочная функция с параметром (users).
// В теле функции используется цепочка методов.
// Значение параметра users не изменяется.
// Вызов функции с указанным массивом пользователей возвращает массив
// ['Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Sheree Anthony', 'Ross Vazquez',
// 'Carey Barr', 'Blackburn Dotson'].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.


// ----------- 43 ------------

// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей
//     (свойство friends) отсортированный по алфавиту.

// // Пиши код ниже этой строки
// const getSortedFriends = users => 
//  [...users]
//   .flatMap((user) => user.friends)
//   .filter((friend, index, array) => array.indexOf(friend) === index)
//   .sort((a, b) => a.localeCompare(b));
// ;
// // Пиши код выше этой строки


// Объявлена переменная getSortedFriends.
// Переменной getSortedFriends присвоена стрелочная функция с параметром (users).
// В теле функции используется цепочка методов в правильном порядке.
// Значение параметра users не изменяется.
// Вызов функции с указанным массивом пользователей возвращает массив
// ['Adrian Cross', 'Aisha Tran', 'Briana Decker', 'Eddie Strong', 'Goldie Gentry',
//     'Jacklyn Lucas', 'Jordan Sampson', 'Linda Chapman', 'Marilyn Mcintosh', 'Naomi Buckner',
//     'Padilla Garrison', 'Sharron Pace', 'Solomon Fokes'].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.


// ----------- 44 ------------

// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала
// общий баланс пользователей(свойство balance), пол которых(свойство gender) совпадает
// со значением параметра gender.

// // Пиши код ниже этой строки
// const getTotalBalanceByGender = (users, gender) => 
//  [...users]
//   .filter(user => user.gender === gender)
//   .reduce((total, user) => total + user.balance, 0)  
// ;
// // Пиши код выше этой строки

// Объявлена переменная getTotalBalanceByGender.
// Переменной getTotalBalanceByGender присвоена стрелочная функция с параметрами (users, gender).
// В теле функции используется цепочка методов в правильном порядке.
// Значение параметра users не изменяется.
// Если значение параметра gender это строка 'male', функция возвращает число 12053.
// Если значение параметра gender это строка 'female', функция возвращает число 8863.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.