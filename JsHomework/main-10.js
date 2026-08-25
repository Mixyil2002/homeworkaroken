// Задача 1.
// Создайте переменные с корректными именами, чтобы сохранить следующую информацию:
// 1. firstName – имя (строка)
// 2. lastName – фамилия (строка)
// 3. isStudent – является ли учеником курса (булево значение)

const firstname = "Майкл";
const lastName = "Алекса";
const isStudent = "True";

// Задача 2.
// 1. Объявите переменную age с числовым значением возраста студента.

const age = 25;

// 2. Объявите переменную currentYear и присвойте ей значение текущего года (например, 2025).

const currentYear = 2025;
// 3. Используя age и currentYear вычислите год рождения студента, запишите результат в переменную birthYear.

const birthYear = currentYear - age;

// Задача 3.
// Выведите в консоли сообщение в таком формате:
// Меня зовут [firstName] [lastName], мне [age] лет. Я ученик/ученица курса: [isStudent].
// console.log(`Меня зовут` firstName lastName`, мне` age `лет`. "Я ученик курса:" isStudent );
console.log(
  `Меня зовут ${firstname} ${lastName} мне ${age} лет. Родился в ${birthYear} году "Я ученик курса:" ${isStudent}`,
);

// Задача 4.
// Какое значение будет у переменной result?
let a = "123";
let b = +"456";
let c = Number("789");
let d = Boolean(0);
let e = Boolean(" ");
let result = a + b + c + d + e;
console.log(result);

// 123456789falsetrue
