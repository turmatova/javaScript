// object - {}
// key : value

// let obj = {
//     id: 1,
//     name: "Vector",
//     age: 22,
//     address: "Bishkek",
//     motion_web: "It academy",
//     "motion web":138,
//     hobby:{
//         sport: ["football", "basketball"],
//         cars: false,
//     },
// }
// obj.name = "Asan"
// Object.freeze(obj)
// console.log(Object.keys(obj).length);
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// obj.name = "Azamat"
// obj.job = "Developer"
// delete obj.address
//  console.log(obj);

// 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.
// obj = {a: 1, b: 2, c: 3}
// console.log(Object.keys(obj).length);

// 2. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите на экран элемент с ключом
//  'c' двумя способами: через квадратные скобки и как свойство объекта.
// let obj = {a: 1, b: 2, c: 3}
// console.log(obj.c);
// console.log(obj["c"]);

// 3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'};
//  Выведите на экран зарплату Атая и Ширин.
// let  obj = {Ширин: '1000', Айжан:'500', Атай: '200'}
// console.log(obj.Атай);
// console.log(obj.Ширин);

// 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Измените зарплату Атая на 500.
// let  obj = {Ширин: '1000', Айжан:'500', Атай: '200'}
// obj.Атай = "500"
// console.log(obj);

// 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}.
//  Добавьте к объекту ключ Медет со значением 1500.
// let obj = {Ширин: '1000', Айжан:'500', Атай: '200'}
// obj.Медет = "1500"
// console.log(obj);

// 6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. 
// Выведите значение ключа salary в консоль.
// let obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// console.log(obj.Атай.salary);

// 7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели
//  (понедельник - первый и т.д.). Выведите на экран текущий день недели.
// let obj = {pn:1, vt:2, sr:3, cht:4, pt:5, sb:6, vs:7}
// console.log(obj.sb);

// 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3.
//  Выведите день недели, соответствующий значению переменной day.
// let obj = {day:{pn:1, vt:2, sr:3, cht:4, pt:5, sb:6, vs:7}}
// console.log(obj.day);

// 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
//  Получите все ключи объекта.
// let  obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// console.log(Object.keys(obj));

// 10. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
//  Получите все значения объекта.
// let obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// console.log(Object.values(obj));

// 11. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. 
// Выведите все entries объекта.
// let obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// console.log(Object.entries(obj));

// 12. Создайте функцию, передайте в нее объект {name: 'Igor'}. Выведите 1, если длина ключа name
//  нечетная, 0 если четная.
// function task12(obj){
//     if (obj.name.length % 2 === 0){
//         return 0
//     } else {
//         return 1
//     } 
// }
// console.log(task12({name: 'Igor'}))

// 13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] . 
// Выведите все id в консоль через map.
// function task13(arr) {
    // return arr.map((el) =>{
        // return el.id
    // })
// }console.log(task13( [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ]));

// 14. Создайте функцию, передайте в нее объект {name: 'Igor'}. Добавьте новый ключ age со значением 25.
//  Поменяйте значение name на Azat.
// function task14(obj){
//     obj.age = "25"
//     obj.name = "Azat"
//     return obj
// } console.log(task14({name: 'Igor'}));

// 15. Вам дан объект product = {
// name: "headphones",
// price: 100,
// discount: 0 }.
//  Найдите стоимость объекта с ценой, и если она больше 100, снизьте ее на 10%. Если это не так, 
// сделайте скидку на 7%. Обновите объект.
// let product = {
//     name: "headphones",
//     price: 100,
//     discount: 0
//     }   
    

        // let users = [
        //     {
        //       id: 1,
        //       name: "Frank",
        //       job: "Analyst",
        //       age: 27,
        //     },
        //     {
        //       id: 2,
        //       name: "Alice",
        //       job: "Engineer",
        //       age: 30,
        //     },
        //     {
        //       id: 3,
        //       name: "Eve",
        //       job: "Doctor",
        //       age: 42,
        //     },
        //     {
        //       id: 4,
        //       name: "Alice",
        //       job: "Manager",
        //       age: 22,
        //     },
        //     {
        //       id: 5,
        //       name: "Frank",
        //       job: "Designer",
        //       age: 35,
        //     },
        //     {
        //       id: 6,
        //       name: "Diana",
        //       job: "Designer",
        //       age: 42,
        //     },
        //     {
        //       id: 7,
        //       name: "Charlie",
        //       job: "Doctor",
        //       age: 40,
        //     },
        //   ];

// 1. баарынын атын чыгарабыз 
// 2. жашы 30 чон object чыксын 
// 3. каждый 2 элементке хобби: спорт деген ключ кошуу
// 4. Именно job: "Manager" - "Developer" ге озгорсун
// 5. Именно Diana деген name - Dana га озгорсун


// задача: на все автомобили, которые старше 2007 года, поставить скидку 20%(для скидки использовать свойство 'sale')
// let auto = [
//   { mark: "Wolksvagen", year: 2005, price: 8000, sale: 0 },
//   { mark: "Audi", year: 1996, price: 2500, sale: 0 },
//   { mark: "Mercedes", year: 2001, price: 5000, sale: 0 },
//   { mark: "BMW", year: 2015, price: 18000, sale: 0 },
//   { mark: "Porsche", year: 2020, price: 120000, sale: 0 },
// ];

// function task1(arr){
//     return arr.map((el) => {
//      if (el.year > 2007){
//         el.sale = 20
//         el.price = el.price - (el.price * 20 / 100)
//         return el
//      }  else {
//         return el
//      }     
//     })
// }  console.log(task1(auto));

// function task13(arr) {
    //     return arr.map((el) =>{
    //         return el.id
    //     })
    // }console.log(task13( [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ]));

// {mark: 'Wolksvagen', year: 2005, price: 8000, sale: 0}
// {mark: 'Audi', year: 1996, price: 2500, sale: 0}
// {mark: 'Mercedes', year: 2001, price: 5000, sale: 0}
// {mark: 'BMW', year: 2015, price: 14400, sale: 20}
// {mark: 'Porsche', year: 2020, price: 96000, sale: 20}