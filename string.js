// let str = "Bishkek city welcome";
// let a = " city"

// console.log(str.strike());
// console.log(str.sub());
// console.log(str.sup());
// console.log(str.big());
// console.log(str.link("https://github.com/ymankulov"));
// console.log(str.slice(-1));
// console.log(str.substring(4, 7));
// console.log(str.substr(8, 4));
// console.log(str.trim());
// console.log(str.trimEnd());
// console.log(str.trimStart());
// console.log(str.trimLeft());
// console.log(str.trimRight());
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str + a);
// console.log(str.concat(a));
// console.log(str.replace("k", "d"));
// console.log(str.replaceAll("k", "d"));
// console.log(str.repeat(5));
// console.log(str.includes("d"));
// console.log(str.charAt(88));
// console.log(str.indexOf("k"));
// console.log(str.lastIndexOf("B"));

// Строки:
// 1. Вам дана переменная str, присвойте ей значение 'Привет, Мир!'.
//  Выведите значение этой переменной в консоль.
// let str = 'Привет, Мир!';
// console.log(str);

// 2. Вам даны переменные str1='Привет, ' и str2='Мир!'. С помощью 
// этих переменных и операции сложения строк выведите в консоль фразу 'Привет, Мир!'.
// let str1 = 'Привет,',  str2 = 'Мир!';
// console.log(str1 + str2)

// 3. Вам дана переменная name, присвойте ей ваше имя. Выведите в консоль фразу 'Привет, *Имя*!'.
// let name = `Shahnoza`;
// console.log(`Привет, ${name}`)

// 4. Вам дана переменная age , присвойте ей ваш возраст. Выведите в консоль 'Мне *Возраст* лет!'.
// let age = 20;
// console.log(`Мне ${age} лет!`)

// 5. Вам даны четыре переменные.
// Первая - для хранения количества дней. Присвойте ей значение "365".
// Вторая - для хранения названия нашей планеты "Земля".
// Третья - для хранения при/мерного количества жителей нашей 
// планеты. Присвойте ей значение "7 млрд.".
// Четвертая - для хранения слова "Солнце".
// Далее, используя текст и переменные, нужно вывести в консоль такой абзац:
// "В нашем году 365 дней. Днём у нас светит Солнце. Население 
// планеты Земля составляет примерно 7 млрд. человек."
// let a = "365";
// let b = "Земля";
// let c = "7 млрд.";
// let v = "Солнце";
// console.log(`В нашем году ${a}дней. Днём у нас светит ${v}. Население 
//   планеты ${b} составляет примерно ${c} человек.`)

//1. Вам дана переменная str = 'Nevis ITDB TECH'. Выведите в консоль длину первого слова.
// let str = 'Nevis ITDB TECH';
// console.log(str.slice(0, 5).length)

// 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО,
// let str = 'Максимально УЖАСНО';
// console.log(str.slice(12))

// 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально,
// только верхним регистром.
// let  str = 'максимально УЖАСНО';
// console.log(str.slice(0, 11).toUpperCase())

// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно',
// используя метод slice.
// let str = 'Максимально Ужасно';
// console.log(str.slice(5))

// 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль букву У, использую метод
// charAt.
// let str = 'Максимально Ужасно';
// console.log(str.charAt(12))

// 8. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные
// строки, используя метод concat.
// let str = 'Максимально', str2 = 'Ужасно';
// console.log(str.concat(str2))

// 10. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более 1
// раза", если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"

// 11. Вам дана переменная str = 'макСИМАЛЬНО ужаСНО'. Выведите в консоль первую букву
//  в верхний регистр.
// let  str = 'макСИМАЛЬНО ужаСНО';
// console.log(str[0] toUpperCase() + str.slice(1).toLowerCase())

// 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения
// буквы а.
// let str = 'Максимально Ужасно';
// console.log(str.indexOf('а'))

// 13. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого последнего
// буквы о.
// let str = 'Максимально Ужасно';
// console.log(str.lastIndexOf('о'))

// 14. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами
// (через substr, substring, slice) и выведите в консоль.
// let str = 'aaa bbb ccc';
// console.log(str.substr(4, 3));
// console.log(str.substring(4, 7));
// console.log(str.slice(4, 7))ф32ы