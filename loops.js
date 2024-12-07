// loops - цикл
// for - 3: начало, условие, шаг
// increment ++ : +1
// decrement -- : -1

// let arr = [67, 89, 74, 21]
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// 1. Выведите столбец чисел от 1 до 50.
// for (let i = 1; i <= 50; 1++){
//     console.log(i);
// }

// 2. Создайте переменную с пустым массивом, заполните массив 10-ю 
// элементами X с помощью цикла.
// let arr = []
// for (let i = 0; i < 10; i++){
//     arr.push("x");
// arr[i] = "x";
// } console.log(arr);

// 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. С помощью цикла for выведите все эти элементы в консоль.
// let arr = [5, 3, 1, 2, 7]
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// 4. Вам дан массив с элементами [5, 2, 1, 2]. С помощью цикла for найдите произведение элементов этого массива.
// let arr = [5, 2, 1, 2]
// let result = 1
// for (let i = 0; i < arr.length; i++){
//     // result = result * arr[i]
// result *= arr[i]
// } console.log(result);

// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.
// for (let i = 0; i < 100; i++){
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.
// let a = 0
// for (let i = 0; i < 100; i++){
//     a += i; 
// }console.log(a);

// 7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for найдите 
// сумму элементов этого массива. Запишите ее в переменную result.
// let arr = [2, 4, 5, 6, 8]
// let a = 0
// for (i = 0; i < arr.length; i++){
//     a += arr [i]
// } console.log(a);

// 8. Вам дан массив [3, 4, 6, 12, 3, 5]. С помощью цикла for и оператора if 
// выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
// let arr = [3, 4, 6, 12, 3, 5]
// let a = 0
// for (let i = 0; i < arr.length; i++){
//         if (arr[i] > 3 && arr [i] < 10) {
//         a += arr[i]
//         console.log(arr[i]);
//         }
//     }

// 9. Вам дан массив с числами. Числа могут быть положительными и отрицательными.
//  Найдите сумму положительных элементов массива.
// let arr = [12, -2, 4, 0, 98, -9]
// let a = 0
//  for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0){
//         res += arr[i]
//     }
// }
// console.log(res);

// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for и 
// оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если 
// есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
// let arr = [5, 1, 3, 7, 6, 4, 15, 3, 20]
// let a = 0
// for (i = 0; i < arr; i++){
//    if (arr = 4){
//     console.log('Есть!' );
//    }
// }

// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000]. Выведите на экран только
//  те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 40, 135, 2000]
// let a = 0
// for (let i = 0; i < arr.length; i++){
//  if (arr[i] === 1 && arr[i] === 2 || arr[i] === 5){
//     a += arr[i]
//     console.log(arr);  
//  }
//     } 

// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for
//  создайте строку '-1-2-3-4-5-6-7-8-9-'.


// 13. Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления 
// не станет меньше 50. Какое число получится? Посчитайте количество итераций, 
// необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
// let n = 1000

// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее арифметическое
//  его элементов (сумма элементов, делить на количество).
// let arr = [1, 2, 3, 7, 6, 9]
// let result = 0
// for ( let i = 0; i < arr.length; i++){
//     result += arr[i]
//     result 
// }  console.log();

// 15. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла найдите сумму квадратов элементов этого массива
// let arr = [1, 2, 3, 4, 5]
// let result = 0
// for (let i = 0; i < arr.length; i++){
//     result += arr [i] **2
// } console.log(result);



// 1. Вывести числа от 1 до 10.
// for (let i = 1; i < 10; i++){
//     console.log(i);
// }

// 2. Вывести четные числа от 2 до 20.
// for (let i = 2; i < 20; i ++){
//   if (i % 2 === 0) {
//             console.log(i);
//         }  
// } 

// 3. Вывести нечетные числа от 1 до 15.
// for (let i = 1; i < 15; i++){
//     if (i % 2 !== 0) {
//                 console.log(i);
//             }
// }

// 4. Найти сумму чисел от 1 до 100.
// let a = 0  
// for (let i = 0; i < 100; i++){
//  a += i
// } console.log(a);

// 5. Найти произведение чисел от 1 до 10.
// let a = 1  
// for (let i = 1; i < 10; i++){
//  a *= i
// } console.log(a);

// 6. Вывести числа от 10 до 1 в обратном порядке.
// for (let i = 10; i > 0; i--){
    // console.log(i);
// }

// 7. Найти сумму всех чисел, кратных 5, от 1 до 50.
// let res = 0
// for (let i = 1; i <=50; i++){
//     if (i % 5 === 0){
//         res += i;
//     }
// }  console.log(res);

// 8. Вывести таблицу умножения числа 7 (от 7 × 1 до 7 × 10).
// let num = 7
// for (let i = 1; i < 10; i++){
//     console.log(num + " x " + i + " = " + num * i);    
// }

// 9. Найти сумму квадратов чисел от 1 до 10.
// let num = 0
// for (let i = 0; i <= 10; i++){
// num += i * i
// } console.log(num);

// 10. Вывести все элементы массива. [2, 4, 6, 8, 10]
//     let arr = [2, 4, 6, 8, 10]
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// 11. Найти сумму всех элементов массива. [3, 7, 2, 9, 4]
// let arr = [3, 7, 2, 9, 4]
// let a = 0
// for (i = 0; i < arr.length; i++){
//     a += arr [i]
// } console.log(a);

// 12. Найти минимальный элемент в массиве. [12, 45, 3, 22, 18];
// let arr =  [12, 45, 3, 22, 18];
// let a = arr[0]
// for (let i = 0; i < arr.length; i++){
//         if (arr[i] < a ) {
//         a = arr[i]
//         }
//     }  console.log(a);
                  
// 13. Найти количество четных чисел в массиве. [5, 8, 13, 2, 10]
// const arr =  [5, 8, 13, 2, 10]
// let count = 0
// for (let i = 0; i < arr.length; i++){
//       if (arr[i] % 2 === 0) {
//     count++;     
//     }  
//     } console.log();         
    
// 14. Вывести каждый символ строки по отдельности. "JavaScript"
// let str = "JavaScript"
// for (let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }
    
// 15. Реверсировать строку. "coding"
    // let str = "coding";
    // for (let i = 0; i < str.length; i++){
    //     console.log(str.split("").reverse("").join(""));   
    // }
     
// 16. Сделать каждую вторую букву строки заглавной. "javascript"
// let arr = "javascript"
// for (let i = 0; i < arr.length; i++){}
     
// 1. Нарисовать треугольник из  звёздочек высотой 5:
// *
// **
// ***
// ****
// *****
// let arr = []
// for (let i = 0; i <= 4; i++){
//     arr.push("*");
// // arr[i] += "*";
// console.log(arr.join(""));
// } 

// 2. Подсчитать количество букв “a” в строке "JavaScript is amazing".
// let arr = "JavaScript is amazing"
// let str = 0
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === "a"){
//         str++
//     }
// } console.log(str);

// 3. Вывести строку "JavaScript" в обратном порядке.
// let str = "JavaScript"
// for (let i = 0; i < str.length; i++){
//     console.log(str.split("").reverse("").join(""));   
// }

// 4. Заменить все пробелы в строке "Hello world!" на дефисы.
// let str = "Hello world!"
// let a = ""
// for(let i = 0; i < str.length; i++){
//     if(str[i] === " "){
//         a += "-";
//     } else{
//         a += str[i]
//     }
// } console.log(a);


// let arr = [1, 2, 3, 4,, 5, 6, 7, 8, 9, 10]
// let num = 0
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0){
//         num += arr[i]
//     }
// } console.log(num);

// let a = 0
// for (let i = 0; i < 100; i++){
//     if (i > 10)
// }

// 1. Выведите столбец чисел от 1 до 50.
// let i = 1;
// while (i < 50){
//     console.log(i);
//     i++;    
// }

// 2. Создайте переменную с пустым массивом, заполните массив 10 -ю элементами X с помощью цикла.

// 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. С помощью цикла for выведите все эти элементы в консоль.
// let arr = [5, 3, 1, 2, 7]
// let i = 0
// while(i < arr.length){
//     console.log(arr[i]);
//     i++;
// }

// 4. Вам дан массив с элементами [5, 2, 1, 2]. С помощью цикла for найдите произведение элементов этого массива.
// let arr = [5, 2, 1, 2]
// let i = 0
// let result = 1
// do {
//     result *= arr[i]
//     i++;
// } while (i < arr.length)
//     console.log(result);
    
// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.
// let i = 0
// while(i < 100){
//     if(i % 2 === 0)
//         console.log(i);
//     i++;  
// }

// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.
// let i = 0
// let b = 0
// do{
//     b += i;
//     console.log(b);
//     i++;    
// } while(i < 100)

// 7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for найдите сумму 
// элементов этого массива. Запишите ее в переменную result.
// let arr = [2, 4, 5, 6, 8]
// let i = 0
// let result = 0
// while (i > arr.length){
//     result += arr[i]
//     i++;
// } console.log(result);

// 8. Вам дан массив [3, 4, 6, 12, 3, 5]. С помощью цикла for и оператора if 
// выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
// let arr = [3, 4, 6, 12, 3, 5]
// let i = 0;
// do{
//     if(arr[i] > 3 && arr[i] < 10)
//    {
//     console.log(arr[i]);
//    }
//         i++;
//  } while (i < arr.length)

// 9. Вам дан массив с числами. Числа могут быть положительными и отрицательными.
//  Найдите сумму положительных элементов массива.
// let arr = [1, 35, -6, 990, -21]
// let i = 0;
// while(i < arr.length){
//  if (arr[i] > 0){
//     a += arr[i];
//  }
//    i++;
// } console.log(arr[i]);

// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for и
//  оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если 
// есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
// let arr = [5, 1, 3, 7, 6, 15, 4, 3, 20]  
// let i = 0
// do{
//   if(arr[i] === 4) {
//     console.log('Есть!');
//   }    
//   i++;
// } while (i < arr.length)

// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000]. Выведите на экран только те 
// числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 40, 135, 2000];
// let i = 0
// while (i < arr.length){
//     if()
//         i++;
// }

// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for
//  создайте строку '-1-2-3-4-5-6-7-8-9-'.

// 13. Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления не
//  станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
//  для этого (итерация - это проход цикла), и запишите его в переменную num.

// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее арифметическое его 
// элементов (сумма элементов, делить на количество).

// 15. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла найдите сумму квадратов элементов этого массива


// function arrayMadness(a, b) {
    // Ready, get set, GO!!                                             \    codewars
    // return 
//   }
//   console.log(arrayMadness([4, 5, 6], [1, 2, 3]))



// 0. Задачи с break:
// 1. Найти первое число, которое делится на 7 в диапазоне от 1 до 50.
// let i = 1;
// while(i < 50){
//  if(i % 7 === 0)
//     break;
// console.log(i);
//   i++;
// }

// 2. Остановить цикл, если текущее число из массива больше 100.
// let arr = [90, 86, 109, 27]
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 100){
//         console.log(arr[i]);
//         break;        
//     }
// }

// 3. Пройтись по строке и остановиться, когда найдется первый символ "a"
// let str = "javascript"
// for (let i = 0; i < str.length; i++){
//     if(str[i] === "a"){
//         break;
//     }
//     console.log(str[i]);
// }

// 4. В массиве из чисел найти первый отрицательный элемент.
// let arr = [1, 6, 4, -7, 9, -3]
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < 0){
//         break;
//     }
//     console.log(arr[i]);
// }

// 5. Проверить, содержит ли массив хотя бы одно четное число, и завершить цикл.
// let arr = [47, 7, 9, 12, 4]
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//         console.log(arr[i]);
//         break;
//     }
// }
// 6. Вывести числа от 1 до 20, но завершить, если текущее число делится на 13.
// for(let i = 1; i < 20; i++){
//     if(
//       i % 13 === 0
//     ){
//         break;
//     }
//     console.log(i);
//   }

// 7. Пройтись по массиву строк и остановиться на первой строке, длина которой больше 5.
// let arr = ['123', '98799', '67898998', '80']
// for(let i = 0; i < arr.length; i++){
//     if(arr[i].length > 5){
//         break;
//     }
//     console.log(arr[i]);   
// }

// 0. Задачи с continue:
// 1. Вывести все числа от 1 до 50, пропуская числа, которые делятся на 5.
// for (let i = 0; i < 50; i++){
// if(i % 5 === 0){
//     continue;
// }
// console.log(i);
// }

// 2. Пройтись по массиву строк и вывести только строки, длина которых меньше 3.
    // let arr = ['kjj', 'tt', 'qwert', 'kjhgghhhhj']
    //     for(let i = 0; i < arr.length; i++){
    //             if(arr[i].length <= 3){
    //                 break;
    //             }
    //             console.log(arr[i]);   
    //         }

// 3. Из массива чисел вывести только нечетные.
// let arr = [56, 89, 67, 76]
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 !== 0){
//    continue;
//     }
//     console.log(arr[i]);
// }

// 4. Пропустить числа от 1 до 20, которые делятся на 2 и 3 одновременно.
// for(let i = 1; i < 20; i++){
//     if(i % 2 !== 0 || i % 3 !== 0){
//         continue;
//     }
//     console.log(i);
// }

// 5. Сгенерировать числа от 1 до 100, пропуская числа, кратные 7.
// for (let i = 0; i < 100; i++){
//     if(i % 7 === 0){
//          continue;
//     }
// console.log(i);
// }

// 6. Пройтись по массиву чисел и вывести только те, которые больше 10.
// let arr = [5, 14, 79]
// for(let i = 0; i < arr.length; i++){
//     if (arr[i] > 10){
//         console.log(arr[i]);
//         continue;
//     }
// }

// 7. Из массива строк вывести только строки, которые содержат букву "e"
//   let str = ['javascript', 'react', 'pyton']
//   for(let i = 0; i < str.length; i++){
//     if(!str[i].includes('e')){
//         continue;
//     }
//     console.log(str[i]);
//   }

// for...in: для объектов
// let obj = {
//   id: 5,
//   name: "Asan",
//   job: "Developer",
// };
// for (let key in obj) {
//   console.log(obj[key]);
// }

// for...of: для массивов
// let arr = [10, 20, 30, 40, 50];
// for(let value of arr) {
//     console.log(value);
// }

// 1. Задача: Используя for...in, выведите все ключи объекта в консоль.
// const user = { name: "John", age: 25, city: "New York" };
// const user = {
//      name: "John",
//      age: 25,
//      city: "New York"
//      };
//      for (let key in user) {
//         console.log(key);
//      }

// 2. Задача: Используя for...in, выведите все значения объекта в консоль.
// const user = { name: "John", age: 25, city: "New York" };
// const user = {
//      name: "John",
//      age: 25, 
//     city: "New York"
//  };
//  for (let key in user) {
//             console.log(user[key]);            
//          }
    
// 3. Задача: Найдите сумму всех значений объекта.
// const salaries = { Alice: 3000, Bob: 1500, Charlie: 2000 };
// let res = 0;
// for(let a in salaries){
//     res += salaries[a]
// }
// console.log(res);

// 4. Задача: Используя for...in, проверьте, есть ли ключ "model" в объекте.
// const car = { brand: "Toyota", model: "Corolla", year: 2018 };
// for(let b in car){
// if(b === "model"){
//     console.log(true);
// } else {
//     console.log(false);
// }
// }

// 5. Задача: Найдите количество ключей в объекте.
// const book = { title: "1984", author: "George Orwell", pages: 328 };

// 6. Задача: Создайте массив, где каждый элемент — строка вида "ключ: значение".
// const fruit = { name: "Apple", color: "Red", weight: "150g" };
// let res = []
// for(let arr in fruit){
//     res.push(fruit[arr])
//     console.log(fruit);
    
// }
// console.log(res);

// 7. Задача: Используя for...in, удалите свойство "job".
// const person = { name: "Alice", age: 30, job: "Developer" };
// for(let v in person){
//  if(v === "job"){
//     delete 
//  }
// }
// 8. Задача: Увеличьте каждое числовое значение на 10.
// const stats = { speed: 40, strength: 60, agility: 70 };
// for(let obj in stats){

// }
// 9. Задача: Преобразуйте все строковые значения объекта в верхний регистр.
// const userInfo = { name: "john", city: "london", country: "uk" };

// 10. Задача: Найдите имя студента с наивысшим баллом.
// const scores = { Alice: 85, Bob: 92, Charlie: 88 };
// // let s = scores.Alice
// let s = scores.Charlie
// for (let b in scores){
//     if (scores[b] > s){
//         console.log(b);
//        }
// }


// 1. Задача: Используя for...of, выведите все элементы массива в консоль.
// const numbers = [10, 20, 30, 40, 50];
// for(let value of numbers) {
//     console.log(value);
// }

// 2. Задача: Найдите сумму всех элементов массива.
// const numbers = [5, 10, 15, 20];
// let res = 0;
// for(let a of numbers){
//     res += a;
// } console.log(res);

// 3. Задача: Используя for...of, выведите только чётные числа.
// const numbers = [1, 2, 3, 4, 5, 6];
// for (let num of numbers){
//     if (num % 2 === 0){
//         console.log(num);
//     }
// }

// 4. Задача: Найдите максимальный элемент массива.
// const numbers = [7, 3, 9, 2, 8];
// let res = numbers[0]
// for (let arr of numbers){
//     if (arr > res){
//         arr === res
//     }
// } 
// console.log(res);

// 5. Задача: Создайте новый массив, где каждое число увеличено на 1.
// const numbers = [1, 2, 3, 4];

// 6. Задача: Подсчитайте количество слов, длина которых больше 3.
// const words = ["cat", "elephant", "dog", "fish"];

// 7. Задача: Выведите элементы массива в обратном порядке.
// const letters = ["a", "b", "c", "d"];

// 8. Задача: Создайте новый массив, содержащий квадраты чисел.
// const numbers = [1, 2, 3, 4];

// 9. Задача: Найдите сумму чисел, представленных строками.
// const strings = ["123", "456", "789"];

// 10. Задача: Проверьте, состоит ли массив только из строк.
// const items = ["hello", "world", 123];


// 1. Преобразование цен в другую валюту
// Описание: Преобразуйте массив цен в долларах в рубли (1 доллар = 100 рублей).
// const pricesInUSD = [10, 15, 20, 25];
// console.log(pricesInUSD.map((el) => el * 100));
// console.log(pricesInRUB); // [1000, 1500, 2000, 2500]

// 2. Отфильтровать совершеннолетних
// Описание: Верните массив только тех, кто старше 18 лет.
// const ages = [12, 17, 18, 21, 34, 15, 19];
// console.log(ages.filter((el) => el >= 18));
// console.log(adults); // [18, 21, 34, 19]

// 3. Получение имен пользователей
// Описание: Создайте массив только из имен.
// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 }
// ];
// console.log(users.map((el) => el.name));
// console.log(userNames); // ['Alice', 'Bob', 'Charlie']

// 4. Удаление товаров дешевле 100 рублей
// Описание: Удалите товары, у которых цена ниже 100 рублей.
// const products = [
//   { name: 'Notebook', price: 50 },
//   { name: 'Pen', price: 10 },
//   { name: 'Backpack', price: 300 },
//   { name: 'Eraser', price: 5 }
// ];
// console.log(products.filter((el) => el.price > 100));
// console.log(expensiveProducts); // [{ name: 'Backpack', price: 300 }]

// 5. Добавить скидку к товарам
// Описание: Примените скидку 20% ко всем товарам.
// const products = [
//   { name: 'Shirt', price: 200 },
//   { name: 'Pants', price: 400 },
//   { name: 'Hat', price: 100 }
// ];
// console.log(products.map((el) =>{ 
//     el.price = el.price - el.price / 100 * 20
//     return el
// }));
// console.log(discountedProducts); 
// // [
// //   { name: 'Shirt', price: 160 },
// //   { name: 'Pants', price: 320 },
// //   { name: 'Hat', price: 80 }
// // ]

// 6. Подсчет общего количества товаров
// Описание: Подсчитайте общее количество всех товаров на складе.
// const inventory = [
//   { name: 'Shirt', quantity: 10 },
//   { name: 'Pants', quantity: 5 },
//   { name: 'Hat', quantity: 8 }
// ];
// console.log(inventory.reduce((acc, el) => {
//     return acc + el.quantity
// },0));  //23

// 7. Проверка всех пользователей на возраст
// Описание: Убедитесь, что все пользователи старше 18 лет.
// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 }
// ];
// console.log(users.every((el) =>{
//     return el.age > 18
// })); // true

// 8. Преобразование массива в строку
// Описание: Преобразуйте массив имен в строку, разделенную запятыми.
// const names = ['Alice', 'Bob', 'Charlie'];
// console.log(names.join(", "));
// console.log(namesString); // 'Alice, Bob, Charlie'

// 9. Разделение строки на массив
// Описание: Преобразуйте строку с именами в массив.
// const namesString = 'Alice, Bob, Charlie';
// console.log(namesString.split(', '));
// console.log(namesArray); // ['Alice', 'Bob', 'Charlie']

// 10. Найти самый дешевый продукт
// Описание: Определите продукт с минимальной ценой.
// const products = [
//   { name: 'Notebook', price: 50 },
//   { name: 'Pen', price: 10 },
//   { name: 'Backpack', price: 300 },
//   { name: 'Eraser', price: 5 }
// ];
// console.log(products.reduce((acc,el) => {
//     return el.price < acc.price ? el : acc
// })); // { name: 'Eraser', price: 5 }

// 11. Фильтр слов по длине
// Описание: Отфильтруйте слова длиной более 3 символов.
// const words = ['cat', 'dog', 'elephant', 'ant'];
// console.log(words.filter((el) => el.length > 3)); // ['elephant']

// 12. Удвоение чисел
// Описание: Умножьте каждое число на 2.
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.map((el) => el * 2)); // [2, 4, 6, 8, 10]

// 13. Проверка наличия отрицательных чисел
// Описание: Проверьте, есть ли в массиве отрицательные числа.
// const numbers = [1, 2, -3, 4, 5];
// console.log(numbers.some((el) => el < 0)); // true

// 14. Подсчет слов в предложении
// Описание: Подсчитайте количество слов в строке.
// const sentence = 'This is a simple sentence';
// console.log(sentence.split(' ').length); // 5

// 15. Найти сумму всех чисел
// Описание: Подсчитайте сумму чисел в массиве.
// const numbers = [10, 20, 30, 40, 50];
// console.log(numbers.reduce((acc, el) => acc + el)); // 150

// 16. Фильтрация пользователей по имени
// Описание: Оставьте в массиве только пользователей с именем, содержащим букву “a”.
// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 },
//   { name: 'Eve', age: 20 }
// ];
// console.log(users.filter((el) => {
//     return el.name.includes("a") || el.name.includes("A")
// })); 
// // [
// //   { name: 'Alice', age: 25 },
// //   { name: 'Charlie', age: 35 }
// // ]

// 17. Проверка, есть ли товар с рейтингом 5
// Описание: Проверьте, есть ли хотя бы один товар с рейтингом 5.
// const products = [
//   { name: 'Laptop', rating: 4.5 },
//   { name: 'Mouse', rating: 3.8 },
//   { name: 'Keyboard', rating: 4.2 },
//   { name: 'Monitor', rating: 5 }
// ];
// console.log(products.some((el) => el.rating === 5)); // true

// 18. Найти самое длинное слово
// Описание: Определите самое длинное слово в массиве.
// const words = ['cat', 'elephant', 'dog', 'giraffe'];
// console.log(words.reduce((acc, el) => (acc.length < el.length ? el :acc))); // 'elephant'

// 19. Преобразование массива чисел в строку
// Описание: Преобразуйте массив чисел в строку, где числа разделены дефисами.
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.join("-")); // '1-2-3-4-5'

// 20. Найти минимальное и максимальное число
// Описание: Определите минимальное и максимальное число в массиве.
// const numbers = [5, 3, 9, 1, 6, 8];
// console.log(Math.min(...numbers));
// console.log(Math.max(...numbers));
// console.log(min); // 1
// console.log(max); // 9

// 21. Найти все четные числа
// Описание: Оставьте в массиве только четные числа.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.filter((el) => el % 2 === 0)); // [2, 4, 6, 8, 10]

// 22.  Обратный порядок массива
// Описание: Разверните массив в обратном порядке.
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.sort((a, b) => b - a));
// console.log(reversed); // [5, 4, 3, 2, 1]

// 23. Умножить все числа на индекс
// Описание: Умножьте каждый элемент массива на его индекс.
// const numbers = [10, 20, 30, 40];
// console.log(numbers.map((el, idx) => el * idx));
// console.log(multipliedByIndex); // [0, 20, 60, 120]

// 24. Проверка, все ли числа положительные
// Описание: Убедитесь, что все числа в массиве положительные.
// const numbers = [1, 2, 3, 4, -5];
// console.log(numbers.every((el) => el < 0));
// console.log(allPositive); // false

// 25. Удалить элементы по значению
// Описание: Удалите из массива все элементы со значением “null”.
// const data = [1, null, 2, 3, null, 4];
// console.log(data.filter((el) => el !== null))
// console.log(filteredData); // [1, 2, 3, 4]

// Напишите функцию для преобразования имени в инициалы. Аргумент в виде строки  строго состоит
//  из двух слов с одним пробелом между ними. На выходе должны быть две заглавные буквы с точкой, 
// разделяющей их. Это должно выглядеть так: 
 
// Sam Harris => S.H 
// patrick feeney => P.F

// let str = "react asdfghj java"
// function task(a) {
//     return a.split(" ").map((el) => {
//         return el[0].toUpperCase()
//     }).join(".")
// }
// console.log(task(str));


// Данному числу nнарисуйте лестницу, используя букву "I", n высокую и n широкую, 
// при этом самая высокая лестница должна находиться вверху слева.
// Например, n = 3результат:
function drawStairs(n) {
    let a = "";
    for (let i = 0; i < n; i++) {
      a += `${" ".repeat(i)}I`;
      if (i < n - 1) {
        a += "\n"; 
      }
    }
    return a;
  }
  console.log(drawStairs(3))