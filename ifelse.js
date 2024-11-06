// conditions - условия - шарт

// if () {
//   console.log();
// } else{
    // console.log
// }



// =
// ==
// ===
// !==  < эмес >  маанисини берет
// <
// >                   -5 -4 -3 -2 -1 0 1 2 3 4 5
// <=
// >=

// console.log(5=5)
// console.log(5=="5") ичини гана текшерет
// console.log(5==="5") сыртыны кошуп текшерет
// console.log(5 !== 4)
// console.log(5 < 6)
// console.log(-6 < -1)
// console.log(3 > -7)
// console.log(10 >= 10)

// true: 1, 12333335, "hhhkm", " "
// false: 0, ""

// логическая сумма ||
// логическая умножения && 

// console.log( true || true || true ||true || true || true)
// console.log(false || false ||false ||false ||false || true)
// console.log(false && false && false && false && false && true &&)
// console.log(true || false && true)


// if () {
    // console.log();
// } else {
    // console.log();
// }
 
// if (5 === 5) {
    // console.log("Yes!")
// } else {
    // console.log("No!")
// }

// let num = 10
// if (num > 10) {
    //  console.log("Yes!")
// } else {
    // console.log("No!")
// }

// if (num >0) {
    // console.log("chon sandar")
// } else if (num ===0) { 
    // console.log("barabar")
// } else {
    // console.log("kichine sandar")
// }

// let color = "green"
// if (color === "red") {
    // console.log("tokto!")
// } else if(color === "yellow") {
    // console.log("dayardan!")
// } else if (color === "green") {
    // console.log( "otober!")
// } else {
    // console.log("Error")
// }



// 1. Вам дана переменная a. Если переменная a равна 10,
//  то выведите 'Верно', иначе выведите 'Неверно'.
    // let a = 10
    // if (a === 10) {
        // console.log('Верно')
    // } else {
        // console.log('Неверно')
    // }
    // let  a = 10
//   a === 10 ? console.log('Верно') : console.log('Неверно')



// 2. Вам даны две переменные a=50, b=100. Составьте условие, по которому 
// в консоль будет выводиться 'a больше b', 'a меньше b'.
// let a=50, b=100
// if (a > b) {
    // console.log('a больше b');
// } else if(a < b) {
    // console.log('a меньше b');
// } else {
    // console.log("wrong")
// }
// let a=50, b=100
// a > b ? console.log('a больше b') :  console.log("wrong")



// 3. Вам дана переменная a=-2. Составьте условие, по которому в консоль
//  будет выводиться 'positive' - если число больше 0, 'равно' если число
//   равно 0, "negative" если число меньше 0.
// let a=-2;
// if (a > 0) {
    // console.log('positive')
// } else if(a === 0){
    // console.log('равно')
// } else {
    // console.log("negative")
// }
// let a=-2;
// a > 0 ?  console.log('positive') : console.log("negative")



// 4. Вам дана переменная number=45. Составьте условие, по которому будет 
// выводиться в консоль "Четное число", "Нечетное число".
// let  number=45
// if( number % 2 === 0) {
    // console.log("Четное число")
// } else{
    // console.log("Нечетное число")
// }
// let  number=45
// number % 2 === 0 ? console.log("Четное число") :  console.log("Нечетное число")



// 5. Вам даны две переменные a=10, b=2. Составьте условие, по которому, 
// остаток деления a на b, будет выводиться консоль "Четное число", "Нечетное число".
// let a=10, b=2
// if( a % b === 0) {
    // console.log("Четное число")
// } else{
    // console.log("Нечетное число")
// }
// let a=10, b=2
// a % b === 0 ? console.log("Четное число") : console.log("Нечетное число")



// 6. Вам дана переменная s. Составьте условие, по которому в консоль 
// будет выводится тип этой переменной - "boolean", "number", "string".
//  let s = "number"
// if (typeof s === "boolean") {
    // console.log("boolean");
// } else if(typeof s === "number") {
    // console.log("number")
// } else if(typeof s === "string") {
    // console.log( "string")
// } else {
    // console.log('error')
// }
// let s = "number"
// typeof s === "boolean" ? console.log("boolean") :  console.log('error')



// let num = 100
// if(num >= 90)
//     console.log(1)
// else if(num >= 70 && num >= 80){
//     console.log(2)
// }
// else if ( num >= 50 && num >= 69){
//     console.log(3)
// }


// 5. Проверка пароля
// Пользователь вводит пароль. Если пароль равен "admin123",
//  вывести сообщение "Доступ разрешен", иначе — "Неверный пароль".
// let password = "admin123"
//  if (password === "admin123") {
    // console.log("Доступ разрешен");
//  } else{
    // console.log("Неверный пароль");
//  }
// let password = "admin123"
// password === "admin123" ? console.log("Доступ разрешен") :  console.log("Неверный пароль")



// 1. Проверка первой буквы
// Пользователь вводит строку. Нужно проверить, начинается ли
//  строка с буквы "A". Если да — вывести "Строка начинается с A", если
//  нет — "Строка не начинается с A".
// let a ='альбом'
// if (a[0] === 'а') {
//     console.log("Строка начинается с A");
// } else {
//     console.log("Строка не начинается с A");
// }
// let a ='альбом'
// a[0] === 'а' ?  console.log("Строка начинается с A") :  console.log("Строка не начинается с A")



// 2. Определение длины строки
// Пользователь вводит строку. Нужно вывести длину этой строки.
// let str = 'laptop'
// console.log(str.length)



// 3. Сравнение строк
// Пользователь вводит две строки. Нужно сравнить их. Если строки
//  одинаковые, вывести "Строки равны", если разные — "Строки не равны".
// let d = 'javaScript', h ='react'
// if (d === h) {
//     console.log("Строки равны");
// } else {
//     console.log("Строки не равны");
// }
//  let d = 'javaScript', h ='react'
//  d === h ?  console.log("Строки равны") :  console.log("Строки не равны")



// 4. Проверка последней буквы
// Пользователь вводит строку. Нужно проверить, заканчивается ли
//  строка на букву "Z". Если да — вывести "Строка заканчивается на Z", если нет — "Строка не заканчивается на Z".
// let str = 'buzz';
// let last = str.slice(-1);
// if (last  === "z") {
//     console.log("Строка заканчивается на Z");
// } else {
//     console.log("Строка не заканчивается на Z");
// }
// let str = 'buzz';
// let last = str.slice(-1)
// last  === "z" ? console.log("Строка заканчивается на Z") :   console.log("Строка не заканчивается на Z")




// 5. Проверка длины строки
// Пользователь вводит строку. Нужно проверить, равна ли длина
// строки 5. Если да — вывести "Длина строки равна 5", если нет — "Длина строки не равна 5".
// let c = 'people'
// console.log(c.length);
// if (c === 5) {
//     console.log( "Длина строки равна 5");
// } else {
//     console.log("Длина строки не равна 5");
// }
// let c = 'people'
// console.log(c.length)
// c === 5 ?  console.log( "Длина строки равна 5") :  console.log("Длина строки не равна 5")




// 6. Проверка наличия пробела
// Пользователь вводит строку. Нужно проверить, содержит ли
//  строка пробел. Если да — вывести "Строка содержит пробел", если нет — "Пробелов нет".
// let v = 'linkedin profile'
// if (v.includes(' ')) {
//     console.log("Строка содержит пробел");
// } else{
//     console.log("Пробелов нет");
// }
// let v = 'linkedin profile'
// v.includes(' ') ? console.log("Строка содержит пробел") : console.log("Пробелов нет")





// 7. Удаление последнего символа
// Пользователь вводит строку. Нужно удалить последний символ строки и вывести результат.
// let str = 'university'
// let result = (str.slice(0, -1))
//     console.log(result)



// switch (key) {
//     case value:
          
//         break;

//     default:
//         break; перерыв
// }

